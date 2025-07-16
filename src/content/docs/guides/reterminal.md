---
title: Seeed reTerminal
description: How to develop for Seeed reTerminal.
---

![reTerminal](../reterminal.jpg)

The Seeed reTerminal is a compact Human-Machine Interface (HMI) device that integrates a Raspberry Pi Compute Module 4 with a touchscreen display in a tablet-like form factor, designed for IoT, industrial automation, and edge AI applications.

## Technical Specifications

**Compute:**
- Quad-Core 64-bit Arm Cortex-A72 CPU at 1.5 GHz

**Memory & Storage:**
- 4GB LPDDR4-3200
- 32GB eMMC
- microSD card slot

**Wireless Connectivity:**
- Built-in Broadcom BCM43455 wireless module with Wi-Fi and Bluetooth

**Display:**
- 5-inch IPS capacitive multi-touch 720x1280 LCD screen 
- 293 PPI pixel density

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
mkdir avocado-reterminal
cd avocado-reterminal
```

3. Start the SDK environment:

```bash
podman run -it --rm -e AVOCADO_SDK_TARGET=reterminal -v $(pwd):/opt:z --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```
