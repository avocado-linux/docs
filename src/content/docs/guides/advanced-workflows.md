---
title: Advanced Workflows
description: Advanced workflows and techniques for the Avocado SDK.
---

## Building from Source

If you need to build Avocado OS components from source rather than using pre-built images:

```bash
# Clone repository
git clone --branch scarthgap https://github.com/avocado-os/meta-avocado.git
cd meta-avocado

# Build target platform (creates base images + packages)
source scripts/init-build kas/machine/qemux86-64.yml
kas build $KAS_YML

# Build SDK container
source scripts/init-build kas/sdk/container-x86_64.yml
kas build $KAS_YML

# Import SDK container
podman import build-container-x86_64/build/tmp/deploy/images/avocado-container-x86_64/avocado-image-container-avocado-container-x86_64.rootfs.tar.bz2 avocadolinux/sdk:dev

# Start development environment
export DEPLOY_DIR=$(pwd)/build-qemux86-64-secureboot/build/tmp/deploy
podman compose -f support/sdk-test/docker-compose.yml down --remove-orphans
podman compose -f support/sdk-test/docker-compose.yml run sdk /bin/bash
```

### Build System Requirements

- **RAM**: 16GB+ recommended for builds
- **Storage**: 100GB+ for complete builds
- **CPU**: Multi-core recommended
- **OS**: Ubuntu 22.04+, Fedora 39+

### Available Build Targets

- `avocado-core`: Base OS images and core SDK
- `avocado-complete`: Everything including extra packages
- Individual machines: `imx93-evk`, `jetson-orin-nano-devkit-nvme`, `raspberrypi4`, `qemux86-64`

## Multi-Target Development

```bash
# Build for multiple targets from same source
export DEPLOY_DIR_IMX93=../../build-imx93-evk/tmp/deploy
export DEPLOY_DIR_RPI4=../../build-raspberrypi4/tmp/deploy

# Start SDK for i.MX93
AVOCADO_SDK_TARGET=imx93-evk
```
