---
title: Seeed Studio reTerminal
description: How to develop for Seeed Studio reTerminal.
---

:::note[Current Status]

| Supported                     | SDK                                    | Provisioning    |
|-------------------------------|----------------------------------------|-----------------|
| 🟢 Target actively maintained | 🟢 x86-64 and aarch64 container images | 🟡 eMMC storage |

:::

<div style={{textAlign: 'center'}}>
  <img src="/img/reterminal.jpg" alt="reTerminal" />
</div>

Seeed Studio's reTerminal is an industrial HMI with the same Raspberry Pi 4 compute module at its heart, but wrapped in a touchscreen interface, expanded I/O, and a form factor designed for real-world deployment.

Since the reTerminal is just a Raspberry Pi 4 with extra peripherals, you can use Avocado OS to develop your application on a Raspberry Pi 4, then quickly retarget your finished Linux image for production hardware.

## Technical Specifications

| Component        | Details                                                    |
|------------------|------------------------------------------------------------|
| CPU              | Quad-core 64-bit Arm Cortex-A72 (1.5 GHz)                  |
| GPU              | Broadcom VideoCore VI (graphics only, not suitable for AI) |
| Memory           | 4GB LPDDR4-3200                                            |
| Memory Bandwidth | 8.5 GB/s                                                   |
| Storage          | 32GB eMMC                                                  |
| Connectivity     | Broadcom BCM43455 wireless module with Wi-Fi and Bluetooth |
| Display          | 5-inch IPS capacitive multi-touch 720x1280 LCD screen      |
| Power Modes      | 2.6W / 4.9W                                                |

## 🚀 Getting Started

Get up and running with the Avocado Linux SDK in minutes.

### Prerequisites

- A Mac (macOS 10.12+) or Linux (Ubuntu 22.04+, Fedora 39+) development machine
- Docker installed
- 3GB+ available disk space

### Installing and running the SDK

1. Install the Avocado CLI:

```bash
wget https://github.com/avocado-linux/avocado-cli/releases/download/0.5.0/avocado-0.5.0_x86_64-unknown-linux-gnu.tar.gz
tar -xf avocado-0.5.0_x86_64-unknown-linux-gnu.tar.gz
mkdir ~/bin
mv avocado ~/bin/.
```

2. Add `$HOME/bin` to your `PATH` environment variable if it is not already there.

3. Create your project workspace:

```bash
mkdir avocado-reterminal
```

4. Initialize a new project:

```bash
cd avocado-reterminal
avocado init
```

5. Replace `qemux86-64` with `reterminal` as `target` in `avocado.toml`:

```bash
[runtime.dev]
target = "reterminal"
```

6. Install all components (SDK, extensions, and runtime dependencies):

```bash
avocado install -f
```

## ⚙️ Provisioning

We are actively working on a provisioning guide for the reTerminal.

## 🧰 Hardware-in-the-Loop (HIL)

We are actively working on Hardware-in-the-Loop (HIL) development for the reTerminal.

## 🧭 Target Roadmap/Known Limitations

🟡 eMMC provisioning is under development\
🟡 Hardware-in-the-Loop (HIL) debugging is under development\
🟠 Secure boot is not yet supported\
🟠 Full disk encryption is not yet supported

