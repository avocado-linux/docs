---
title: NVIDIA Jetson Orin Nano Super
description: How to develop for NVIDIA Jetson Orin Nano Super.
---

![Jetson Orin Nano Super](../orin-nano.jpg)

The Jetson Orin Nano Super is a powerful single-board computer that delivers up to 67 TOPS of AI performance while maintaining energy efficiency in a compact form factor.

## Technical Specifications

**Compute:**
- 6-core Arm Cortex-A78AE v8.2 64-bit CPU at 1.7 GHz
- NVIDIA Ampere GPU with 1024 CUDA cores and 32 tensor cores
- AI Performance: Up to 67 TOPS (INT8)
- Memory bandwidth: 102 GB/s

**Memory & Storage:**
- 8GB 128-bit LPDDR5
- 2 x M.2 Key M slots for PCIe NVMe SSDs
- microSD card slot

**Wireless Connectivity:**
- Single M.2 Key E wireless module with Wi-Fi and Bluetooth

**Power Modes:**
- 7W min
- 15W standard
- 25W super

## Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- Linux development machine (Ubuntu 22.04+, Fedora 39+)
- docker installed
- 20GB+ available disk space

### Installing and running the SDK

1. Pull the SDK container:

```bash
docker pull avocadolinux/sdk:apollo-edge
```

2. Create your workspace:

```bash
mkdir avocado-jetson-orin-nano
cd avocado-jetson-orin-nano
```

3. Start the SDK environment:

```bash
docker run -it --rm -e AVOCADO_SDK_TARGET=jetson-orin-nano-devkit-nvme -v $(pwd):/opt/_avocado/src:ro -v $(pwd)/_avocado:/opt/_avocado:rw --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```
