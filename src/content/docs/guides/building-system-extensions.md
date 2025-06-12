---
title: Building System Extensions
description: How to build system extensions (sysext) with the Avocado SDK.
---

# Building System Extensions

## Understanding System Extensions

System extensions (sysext) extend the `/usr` and `/opt` hierarchies with:
- Application binaries (`/usr/bin`, `/usr/sbin`)
- Libraries (`/usr/lib`, `/usr/lib64`)
- Service definitions (`/usr/lib/systemd/system`)
- Application data (`/usr/share`)

## Basic Extension Building

```bash
# 1. Install packages into sysext sysroot
avocado-repo sysext install python3-flask

# 2. Build the extension
avocado-build sysext webserver

# Extension created at: /opt/_avocado/extensions/sysext/webserver.raw
```

## Advanced Extension Building

### Custom Application Integration

```bash
# 1. Set up development environment
avocado-repo target-dev install libssl-dev libsqlite3-dev

# 2. Cross-compile your application
cd /opt/my-project
mkdir -p build && cd build

# Configure build (toolchain variables are pre-set)
cmake -DCMAKE_TOOLCHAIN_FILE=$CMAKE_TOOLCHAIN_FILE \
      -DCMAKE_INSTALL_PREFIX=/usr \
      ..

# Build
make -j$(nproc)

# 3. Install into sysext sysroot
make DESTDIR=$AVOCADO_SDK_SYSROOTS/sysext install

# 4. Add systemd service
mkdir -p $AVOCADO_SDK_SYSROOTS/sysext/usr/lib/systemd/system
cat > $AVOCADO_SDK_SYSROOTS/sysext/usr/lib/systemd/system/myapp.service << EOF
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/myapp
Restart=always
User=myapp

[Install]
WantedBy=multi-user.target
EOF

# 5. Build extension
avocado-build sysext myapp
```

## Extension Verification

After building, extensions can be verified:

```bash
# Check extension structure
unsquashfs -l /opt/_avocado/extensions/sysext/webserver.raw

# Verify extension release file
unsquashfs -cat /opt/_avocado/extensions/sysext/webserver.raw usr/lib/extension-release.d/extension-release.webserver
```