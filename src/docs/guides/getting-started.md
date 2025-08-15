---
title: Getting Started
description: Quick start guide for the Avocado Linux SDK.
---

Get up and running with the Avocado Linux SDK in minutes.

## Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 3GB+ available disk space

## Installing and running the SDK

1. Install the Avocado CLI:

```bash
wget https://github.com/avocado-linux/avocado-cli/releases/download/0.5.0/avocado-0.5.0_<machine>.tar.gz
tar -xf avocado-0.5.0_<machine>.tar.gz
mkdir ~/bin
mv avocado ~/bin/.
```

Replace `<machine>` with `x86_64-unknown-linux-gnu` or `x86_64-apple-darwin` depending on whether you are developing on x86-64 Linux or an Intel-based Mac.

2. Add `$HOME/bin` to your `PATH` environment variable if it is not already there.

3. Create your project workspace:

```bash
mkdir foo
```

4. Initialize a new project:

```bash
cd foo
avocado init
```

5. Install all components (SDK, extensions, and runtime dependencies):

```bash
avocado install -f
```

## Building an extension image

Let's build a simple `hello-world` extension image.

1. Add a `hello-world` extension under `[runtime.default.dependencies]` in `avocado.toml`:

```bash
[runtime.default.dependencies]
avocado-img-bootfiles = "*"
avocado-img-rootfs = "*"
avocado-img-initramfs = "*"
avocado-dev = { ext = "avocado-dev" }
hello-world = { ext = "hello-world" }
```

2. Append the following to `avocado.toml`:

```bash
[ext.hello-world]
types = ["sysext", "confext"]
version = "1.0.0"
scopes = ["system"]

[ext.hello-world.dependencies]
hello-world = { compile = "hello-world" }
```

3. Install dependencies into extension sysroots:

```bash
avocado ext install
```

4. Populate `hello-world` extension contents:

```bash
sudo mkdir _avocado/qemux86-64/extensions/hello-world/usr
sudo mkdir _avocado/qemux86-64/extensions/hello-world/etc
sudo sh -c 'echo "hello from /etc" > _avocado/qemux86-64/extensions/hello-world/etc/hello-world'
sudo sh -c 'echo "hello from /usr" > _avocado/qemux86-64/extensions/hello-world/usr/hello-world'
```

5. Build the `hello-world` extension:

```bash
avocado ext build --extension hello-world
```

## Building a bootable image

1. Build all components (SDK compile, extensions, and runtime images):

```bash
avocado build
```

2. Provision a runtime:

```bash
avocado provision --runtime dev
```

## Booting an image with QEMU

1. Run image on a QEMU virtual machine:

```bash
avocado sdk run -ie vm dev
```

2. Log in as `root` with no password:

```bash
avocado-qemux86-64 login: root
```

3. Enter `Ctrl-a` then `x` when you are ready to exit the QEMU virtual machine.

