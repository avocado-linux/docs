---
title: SDK Architecture
description: Overview of the Avocado SDK architecture and components.
---

# SDK Architecture

## Components

The Avocado SDK provides a containerized development environment consisting of:

**SDK Container**:
- Cross-compilation toolchains for target platforms
- Package management via DNF/RPM
- Extension building tools (squashfs-tools, btrfs-tools, genimage)
- Target sysroots for development

**Build Tools**:
- `avocado-repo`: Package installation and management
- `avocado-build`: Extension and image building
- `avocado-run-qemu`: QEMU testing (for supported targets)

## Architecture Overview

![Architecture Overview](../arch-over.png)