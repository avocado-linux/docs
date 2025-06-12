---
title: Package Management
description: How to manage packages in the Avocado SDK.
---

## Understanding Package Types

**nativesdk packages**: Run on development host (in SDK)
- Cross-compilation toolchains
- Build tools (genimage, squashfs-tools)
- QEMU emulators
- Development utilities

**Target packages**: Run on target device
- Applications and libraries
- System services
- Runtime dependencies

**Development packages (-dev suffix)**: Headers and static libraries
- For cross-compilation
- Installed in `target-dev` sysroot
- Required to build applications that link against libraries

## Installing SDK Toolchain Components

```bash
# Install additional cross-compilation tools
avocado-repo sdk install nativesdk-cmake nativesdk-autotools

# Install QEMU for testing
avocado-repo sdk install nativesdk-qemu-system-x86_64

# Install development utilities
avocado-repo sdk install nativesdk-gdb nativesdk-strace
```

## Installing Development Dependencies

```bash
# Install development headers for cross-compilation
avocado-repo target-dev install openssl-dev libcurl-dev sqlite-dev

# Install Python development
avocado-repo target-dev install python3-dev
```

## Installing Extension Packages

```bash
# Install packages into sysext sysroot
avocado-repo sysext install nginx python3-flask supervisor

# Install system service
avocado-repo sysext install openssh-server
```

## Installing Configuration Packages

```bash
# Install certificate management
avocado-repo confext install ca-certificates

# Install environment-specific configs
avocado-repo confext install production-config
```
