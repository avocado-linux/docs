---
title: SDK Architecture
description: Overview of the Avocado SDK architecture and components.
---

## Components

The Avocado SDK provides a containerized development environment consisting of:

**SDK Container**:
- Cross-compilation toolchains for target platforms
- Package management via DNF/RPM
- Extension building tools (squashfs-tools, btrfs-tools, fwup)
- Target sysroots for development

**Build Tools**:
- `avocado ext build <extension>`: Extension image building
- `avocado runtime build default`: Linux image building
- `avocado provision --runtime dev`: Device provisioning
- `avocado sdk run -ie vm dev`: QEMU testing

## Architecture Overview

![Architecture Overview](/img/arch-over.png)
