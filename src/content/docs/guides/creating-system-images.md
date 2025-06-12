---
title: Creating Complete System Images
description: How to create complete system images with the Avocado SDK.
---

## Building Var Partition

The var partition contains extensions and is built separately:

```bash
# Build var partition with all current extensions
avocado-build var
```

This creates `/opt/_avocado/images/avocado-image-var.btrfs` containing:
- `lib/extensions/` - All built system extensions
- `lib/confexts/` - All built configuration extensions

## Building Complete System Image

```bash
# 1. Download base system images
avocado-repo images

# 2. Build complete system image
avocado-build image
```

This process:
1. Uses base rootfs and initramfs images
2. Includes the var partition with extensions
3. Creates bootable system image via genimage
4. Outputs complete image in `/opt/_avocado/output/`

## Image Components

For qemux86-64, the complete image includes:

```
avocado-image-qemux86-64.img
├── Boot partition (FAT32, EFI)
│   ├── systemd-boot (UEFI bootloader)
│   ├── vmlinuz (kernel)
│   └── initramfs.cpio.zst (initramfs)
├── Root partition (SquashFS, read-only)
│   └── avocado-image-rootfs-qemux86-64.rootfs.squashfs
└── Var partition (btrfs, read-write)
    └── avocado-image-var-qemux86-64.btrfs
```
