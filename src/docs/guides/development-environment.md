---
title: Development Environment
description: How to set up your Avocado SDK environment.
---

## Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 3GB+ available disk space
- Access to Avocado OS base images (online or pre-downloaded)

## Using Pre-built Components

Fetch pre-built base images and SDK containers:

```bash
# Pull SDK container
docker pull avocadolinux/sdk:apollo-edge

# Create a directory to save the SDK to
mkdir avocado-<target>
cd avocado-<target>

# Start development environment
docker run -it --rm -e AVOCADO_SDK_TARGET=<target> \
  -v $(pwd):/opt/_avocado/src:ro \
  -v $(pwd)/_avocado:/opt/_avocado:rw \
  --entrypoint entrypoint.sh \
  avocadolinux/sdk:apollo-edge /bin/bash
```

Replace `<target>` with one of the supported target platforms below.

## Supported Target Platforms

Set the `AVOCADO_SDK_TARGET` environment variable to one of the following available Avocado SDK targets when starting an SDK container:

**Arm**:
- `imx8mp-evk`: NXP i.MX 8M Plus Evaluation Kit
- `jetson-orin-nano-devkit-nvme`: NVIDIA Jetson Orin Nano Developer Kit
- `qemuarm64`: QEMU aarch64 Virtual Machine
- `raspberrypi4`: Raspberry Pi 4
- `reterminal`: Seeed reTerminal

**x86**:
- `qemux86-64`: QEMU x86-64 Virtual Machine

## Extension Image Build Pipeline

![Extension Image Build Pipeline](/img/sdk-container.png)
