---
title: Raspberry Pi 4
description: How to develop for Raspberry Pi 4.
---

:::note[Current Status]

| Supported                     | SDK                                    | Provisioning            |
|-------------------------------|----------------------------------------|-------------------------|
| 🟢 Target actively maintained | 🟢 x86-64 and aarch64 container images | 🟡 microSD card storage |

:::

<div style={{textAlign: 'center'}}>
  <img src="/img/rpi-4.jpg" alt="Raspberry Pi 4" />
</div>

The Raspberry Pi 4 is the world’s most widely adopted single-board computer—powerful, affordable, and perfect for rapid prototyping and deployment. With up to 8GB of RAM and a quad-core Cortex-A72 processor, it’s more than capable of running advanced workloads at the edge.

When paired with Avocado OS, developers can accelerate time to production with a streamlined, repeatable Linux development environment—no complex toolchains, no custom Yocto builds.

## 🛠 Technical Specifications

| Component        | Details                                                    |
|------------------|------------------------------------------------------------|
| CPU              | Quad-core 64-bit Arm Cortex-A72 (1.8 GHz)                  |
| GPU              | Broadcom VideoCore VI (graphics only, not suitable for AI) |
| Memory           | 1GB, 2GB, 4GB, or 8GB LPDDR4-3200 variants                 |
| Memory Bandwidth | 8.5 GB/s                                                   |
| Storage          | microSD card slot                                          |
| Connectivity     | Broadcom BCM43455 wireless module with Wi-Fi and Bluetooth |
| Power Modes      | 3.5W / 5W / 6.5W / 8W                                      |

## 🚀 Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 3GB+ available disk space

### Installing and running the SDK

1. Install the Avocado CLI:

```bash
wget https://github.com/avocado-linux/avocado-cli/releases/download/0.5.0/avocado-0.5.0_x86_64-unknown-linux-gnu.tar.gz
tar -xf avocado-0.5.0_x86_64-unknown-linux-gnu.tar.gz
mkdir ~/bin
mv avocado ~/bin/.
```

2. Add `$HOME/bin` to your `PATH` environment variable if it is not already there.

3. Create your project workspace:

```bash
mkdir avocado-rpi4
```

4. Initialize a new project:

```bash
cd avocado-rpi4
avocado init
```

5. Replace `qemux86-64` with `raspberrypi4` as `target` in `avocado.toml`:

```bash
[runtime.dev]
target = "raspberrypi4"
```

6. Install all components (SDK, extensions, and runtime dependencies):

```bash
avocado install -f
```

## ⚙️ Provisioning

We are actively working on a provisioning guide for the Raspberry Pi 4.

## 🧰 Hardware-in-the-Loop (HIL)

We are actively working on Hardware-in-the-Loop (HIL) development for the Raspberry Pi 4.

## 🧭 Target Roadmap/Known Limitations

🟡 microSD card provisioning is under development\
🟡 Hardware-in-the-Loop (HIL) debugging is under development
