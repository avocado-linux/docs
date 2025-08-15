---
title: NVIDIA Jetson Orin Nano Developer Kit
description: How to develop for NVIDIA Jetson Orin Nano Developer Kit.
---

:::note[Current Status]

| Supported                     | SDK                                    | Provisioning    |
|-------------------------------|----------------------------------------|-----------------|
| 🟢 Target actively maintained | 🟢 x86-64 and aarch64 container images | 🟡 NVMe storage |

:::

![Jetson Orin Nano Developer Kit](/img/orin-nano.jpg)

The Jetson Orin Nano Developer Kit delivers exceptional performance for real-time ML at the edge—up to 67 TOPS of AI compute. Paired with Avocado OS, you can deploy full inference pipelines in minutes, without the typical headaches of cross-compiling or system reboots.

Whether you're building computer vision, robotics, or edge AI applications, this target gets you production-ready fast.

## 🛠 Technical Specifications

| Component        | Details                                                    |
|------------------|------------------------------------------------------------|
| CPU              | 6-core Arm Cortex-A78AE v8.2 (1.7 GHz)                     |
| GPU              | NVIDIA Ampere GPU with 1024 CUDA cores and 32 tensor cores |
| AI Performance   | Up to 67 TOPS (INT8)                                       |
| Memory           | 8GB 128-bit LPDDR5                                         |
| Memory Bandwidth | 102 GB/s                                                   |
| Storage          | 2 x M.2 Key M slots for PCIe NVMe SSDs                     |
| Connectivity     | Single M.2 Key E wireless module with Wi-Fi and Bluetooth  |
| Power Modes      | 7W / 15W / 25W                                             | 

## 🚀 Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 10GB+ available disk space

### Installing and running the SDK

1. Install the Avocado CLI and append the location of the `avocado` executable to your `PATH` environmant variable.

2. Create your project workspace:

```bash
mkdir avocado-jetson-orin-nano
```

3. Initialize a new project:

```bash
cd avocado-jetson-orin-nano
avocado init
```

4. Replace `qemux86-64` with `jetson-orin-nano-devkit-nvme` as `target` in `avocado.toml`:

```bash
[runtime.dev]
target = "jetson-orin-nano-devkit-nvme"
```

5. Install all components (SDK, extensions, and runtime dependencies):

```bash
avocado install -f
```

## ⚙️ Provisioning

We are actively working on a provisioning guide for the Jetson Orin Nano Developer Kit.

## 🧰 Hardware-in-the-Loop (HIL)

We are actively working on Hardware-in-the-Loop (HIL) development for the Jetson Orin Nano Developer Kit.

## 🤖 Deploying ML Inference with Triton

  <iframe width="100%" style={{aspectRatio: '16 / 9'}} src="https://www.youtube.com/embed/ioXyUgEH5Wo" frameBorder="0" allowFullScreen></iframe>

With Avocado OS, you can deploy NVIDIA’s Triton Inference Server in just six commands—no cross-compiling or reflashing required.

Why it matters:
- Model updates apply *live*, without device reboots or service restarts
- Works seamlessly with Avocado’s OTA update infrastructure
- Supports Hardware-in-the-Loop (HIL) testing workflows

[See how we built this at Open Source Summit →](https://blog.peridio.com/nvidia-jetson-with-avocado-os)

## 🧭 Target Roadmap/Known Limitations

🟢 GPU-accelerated ML inference is fully supported\
🟡 GPU-accelerated video pipelines are under development\
🟡 NVMe provisioning is under development\
🟡 Hardware-in-the-Loop (HIL) debugging is under development\
🟠 Secure boot is not yet supported\
🟠 Full disk encryption is not yet supported

## Related Resources

- [Edge AI with Triton Inference Server](https://blog.peridio.com/nvidia-jetson-with-avocado-os)
