---
title: NXP i.MX 8M Plus Evaluation Kit
description: How to develop for NXP i.MX 8M Plus Evaluation Kit.
---

:::note[Current Status]

| Supported                     | SDK                                    | Provisioning    |
|-------------------------------|----------------------------------------|-----------------|
| 🟢 Target actively maintained | 🟢 x86-64 and aarch64 container images | 🟡 eMMC storage |

:::

![i.MX 8M Plus](/img/imx-8m-plus.jpg)

The i.MX 8M Plus Evaluation Kit is a powerful and flexible platform for edge AI development. With a quad-core Cortex-A53 processor and an integrated neural processing unit (NPU), it enables real-time ML inference without overloading the CPU—ideal for vision, voice, and industrial applications.

Combined with Avocado OS, teams can deploy complex workloads quickly using a consistent, production-ready Linux environment.

## 🛠 Technical Specifications

| Component        | Details                                                   |
|------------------|-----------------------------------------------------------|
| CPU              | Quad-core Arm Cortex-A53 (1.8 GHz)                        |
| MCU              | Single Arm Cortex-M7 (800 MHz)                            |
| NPU              | i.MX 8M Plus SoC integrated NPU                           |
| AI Performance   | Up to 2.3 TOPS (INT8)                                     |
| Memory           | 6GB 32-bit LPDDR4                                         |
| Memory Bandwidth | 12.8 GB/s                                                 |
| Storage          | 32GB eMMC                                                 |
| Connectivity     | Single M.2 Key E wireless module with Wi-Fi and Bluetooth |
| Power Modes      | 1.7W / 2W / 4W / 6W                                       |

## 🚀 Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 3GB+ available disk space

### Installing and running the SDK

1. Pull the SDK container:

```bash
docker pull avocadolinux/sdk:apollo-edge
```

2. Create your workspace:

```bash
mkdir avocado-imx8mp
cd avocado-imx8mp
```

3. Start the SDK environment:

```bash
docker run -it --rm -e \
  AVOCADO_SDK_TARGET=imx8mp-evk \
  -v $(pwd):/opt/_avocado/src:ro \
  -v $(pwd)/_avocado:/opt/_avocado:rw \
  --entrypoint entrypoint.sh \
  avocadolinux/sdk:apollo-edge /bin/bash
```

## ⚙️ Provisioning

We are actively working on a provisioning guide for the i.MX 8M Plus Evaluation Kit.

## 🧰 Hardware-in-the-Loop (HIL)

We are actively working on Hardware-in-the-Loop (HIL) development for the i.MX 8M Plus Evaluation Kit.

## 🧭 Target Roadmap/Known Limitations

🟡 NPU-accelerated ML inference is under development\
🟡 NPU-accelerated video pipelines are under development\
🟡 eMMC provisioning is under development\
🟡 Hardware-in-the-Loop (HIL) debugging is under development\
🟠 Secure boot is not yet supported\
🟠 Full disk encryption is not yet supported
