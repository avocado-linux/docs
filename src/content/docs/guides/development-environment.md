---
title: Setting Up Development Environment
description: How to set up your development environment for the Avocado SDK.
---

## Prerequisites

- Linux development machine (Ubuntu 22.04+, Fedora 39+)
- Podman installed
- 20GB+ available disk space
- Access to Avocado OS base images (online or pre-downloaded)

## Using Pre-built Components

Fetch pre-built base images and SDK containers:

```bash
# Pull SDK container
podman pull avocadolinux/sdk:apollo-edge

# Create a directory to save the SDK to
mkdir avocado-<target>

# Start development environment
cd avocado
podman run -it --rm -e AVOCADO_SDK_TARGET=<target> -v $(pwd):/opt:z --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```

Replace `<target>` with one of the supported target platforms below.

## Supported Target Platforms

Set the `AVOCADO_SDK_TARGET` environment variable to one of the following available Avocado SDK targets when starting an SDK container:

**Arm**:
- `imx91-frdm`: NXP FRDM i.MX 91 Development Board
- `imx93-evk`: NXP i.MX 93 Evaluation Kit
- `imx93-frdm`: NXP FRDM i.MX 93 Development Board
- `jetson-orin-nano-devkit-nvme`: NVIDIA Jetson Orin Nano Super
- `raspberrypi4`: Raspberry Pi 4
- `reterminal`: Seeed reTerminal

**x86**:
- `qemux86-64`: QEMU x86-64 Virtual Machine

## Extension Image Build Pipeline

![Extension Image Build Pipeline](../sdk-container.png)
