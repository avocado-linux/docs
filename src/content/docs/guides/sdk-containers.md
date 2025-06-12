---
title: Working with SDK Containers
description: How to work with SDK containers and their environment.
---

## SDK Container Environment

When you enter the SDK container, several key environment variables are configured:

```bash
# SDK paths
AVOCADO_SDK_PREFIX="/opt/_avocado/sdk"
AVOCADO_SDK_SYSROOTS="/opt/_avocado/sdk/sysroots"

# Target information
AVOCADO_SDK_TARGET="qemux86-64"  # Or your selected target

# Cross-compilation environment (auto-configured)
CC="${TARGET_PREFIX}gcc"
CXX="${TARGET_PREFIX}g++"
# ... other toolchain variables
```

## Sysroot Structure

The SDK maintains several sysroots for different purposes:

```
/opt/_avocado/sdk/sysroots/
├── target-dev/          # Cross-compilation headers and libraries
├── rootfs/              # Base system packages (read-only reference)
├── sysext/              # System extension building area
├── confext/             # Configuration extension building area
└── var/                 # Var partition building area
```

## SDK Container Commands

**avocado-repo**: Package management
```bash
avocado-repo sdk <dnf-command>           # Manage SDK toolchain packages
avocado-repo target-dev <dnf-command>    # Manage development packages  
avocado-repo sysext <dnf-command>        # Manage extension packages
avocado-repo confext <dnf-command>       # Manage configuration packages
avocado-repo images                      # Download base system images
```

**avocado-build**: Building extensions and images
```bash
avocado-build sysext <name>              # Build system extension
avocado-build confext <name>             # Build configuration extension
avocado-build var                        # Build var partition
avocado-build image                      # Build complete system image
```

**avocado-run-qemu**: Testing (QEMU targets only)
```bash
avocado-run-qemu                         # Boot system in QEMU
```
