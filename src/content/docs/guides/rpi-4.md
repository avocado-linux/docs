---
title: Raspberry Pi 4
description: How to develop for Raspberry Pi 4.
---

![Raspberry Pi 4](../rpi-4.jpg)

The Raspberry Pi 4 is the most popular single-board computer on the planet. Released in June 2019, it represents a major upgrade in processing power and memory capacity compared to earlier Raspberry Pi models.

## Technical Specifications

**Compute:**
- Quad-core 64-bit Arm Cortex-A72 CPU at 1.8 GHz

**Memory & Storage:**
- 1GB, 2GB, 4GB, or 8GB LPDDR4-3200 variants
- microSD card slot

**Wireless Connectivity:**
- Built-in Broadcom BCM43455 wireless module with Wi-Fi and Bluetooth

## Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- Linux development machine (Ubuntu 22.04+, Fedora 39+)
- Podman installed
- 20GB+ available disk space

### Installing and running the SDK

1. Pull the SDK container:

```bash
podman pull avocadolinux/sdk:apollo-edge
```

2. Create your workspace:

```bash
mkdir avocado-rpi4
cd avocado-rpi4
```

3. Start the SDK environment:

```bash
podman run -it --rm -e AVOCADO_SDK_TARGET=raspberrypi4 -v $(pwd):/opt:z --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```
