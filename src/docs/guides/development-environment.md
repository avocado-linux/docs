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
# Create a project directory to save the SDK to
mkdir foo

# Initialize a new project
cd foo
avocado init

# Install all components (SDK, extensions, and runtime dependencies)
avocado install -f
```

The SDK target defaults to the QEMU x86-64 virtual machine. Choose from one of the following available SDK targets when starting a new project.

## Supported Target Platforms

Set `target` under `[runtime.dev]` in `avocado.toml` to one of the following available Avocado SDK targets before initializing a new project:

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
