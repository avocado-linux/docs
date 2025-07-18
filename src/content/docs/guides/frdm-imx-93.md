---
title: NXP FRDM i.MX 93
description: How to develop for NXP FRDM i.MX 93.
---

![FRDM i.MX 93](../frdm-imx-93.jpg)

The FRDM i.MX 93 is a low-cost development board for rapid prototyping. It includes built-in Wi-Fi and Bluetooth and requires extremely little power, making it ideal for modern industrial and IoT applications.

## Technical Specifications

**Compute:**
- Dual-core Arm Cortex-A55 64-bit CPU at 1.7 GHz
- Single Cortex-M33 32-bit micro at 250 MHz
- Arm Ethos U-65 microNPU up to 0.5 TOPS

**Memory & Storage:**
- 2GB 16-bit LPDDR4X
- 32GB eMMC
- Single M.2 Key M slot for PCIe NVMe SSD
- microSD card slot

**Wireless Connectivity:**
- Built-in NXP IW612 wireless module with Wi-Fi and Bluetooth

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
mkdir imx93-frdm
cd imx93-frdm
```

3. Start the SDK environment:

```bash
docker run -it --rm -e AVOCADO_SDK_TARGET=imx93-frdm -v $(pwd):/opt/_avocado/src:ro -v $(pwd)/_avocado:/opt/_avocado:rw --entrypoint entrypoint.sh avocadolinux/sdk:apollo-edge /bin/bash
```
