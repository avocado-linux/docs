---
title: Hardware-in-the-Loop Development
description: How to perform hardware-in-the-loop development with the Avocado SDK.
---

## Live Development Setup

For iterative development on physical hardware:

```bash
# 1. Deploy base system to target device
# (Flash complete image to SD card/eMMC)

# 2. Set up NFS export from development machine
sudo mkdir -p /srv/nfs/extensions
sudo chown $(id -u):$(id -g) /srv/nfs/extensions
cp /opt/_avocado/extensions/sysext/*.raw /srv/nfs/extensions/

# 3. On target device, mount NFS share
mount -t nfs dev-machine:/srv/nfs/extensions /var/lib/extensions

# 4. Activate extensions
systemctl restart systemd-sysext

# Extensions are now active on target
```

## Remote Debugging

```bash
# Install GDB server on target (via extension)
avocado-repo sysext install gdbserver
avocado-build sysext debug-tools

# On target, start gdbserver
gdbserver :2345 /usr/bin/myapp

# In SDK container, connect with cross-gdb
avocado-repo sdk install nativesdk-gdb
$GDB /opt/_avocado/sysroots/target-dev/usr/bin/myapp
(gdb) target remote target-device:2345
```

## Performance Profiling

```bash
# Install profiling tools
avocado-repo sysext install perf strace valgrind
avocado-build sysext profiling-tools

# Profile on target
perf record -g /usr/bin/myapp
perf report --stdio > profile.txt

# Copy results back for analysis
scp target-device:profile.txt /opt/analysis/
```
