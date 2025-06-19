---
title: Setting Up Development Environment
description: How to set up your development environment for the Avocado SDK.
---

## Prerequisites

- Linux development machine (Ubuntu 22.04+, Fedora 39+)
- Podman or Docker
- 20GB+ available disk space
- Access to Avocado OS base images (online or pre-downloaded)

## Using Pre-built Components

Fetch pre-built base images and SDK containers:

```bash
# Pull SDK container
podman pull avocadolinux/sdk:apollo-edge

# Create a directory to save the SDK to
mkdir avocado

# Start development environment
cd avocado
podman run -it --rm -e AVOCADO_SDK_TARGET=qemux86-64 -v $(pwd):/opt:z --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```

## Supported Target Platforms

Available kas machine configurations:

```bash
# Arm-based targets
kas/machine/imx91-frdm.yml           # NXP i.MX91 FRDM board
kas/machine/imx93-evk.yml            # NXP i.MX93 EVK board  
kas/machine/imx93-frdm.yml           # NXP i.MX93 FRDM board
kas/machine/jetson-orin-nano-devkit-nvme.yml  # NVIDIA Jetson Orin Nano
kas/machine/raspberrypi4.yml         # Raspberry Pi 4
kas/machine/reterminal.yml           # Seeed reTerminal

# x86 targets  
kas/machine/qemux86-64.yml           # QEMU x86_64 virtualization
```
