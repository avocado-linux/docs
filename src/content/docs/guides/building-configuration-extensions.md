---
title: Building Configuration Extensions
description: How to build configuration extensions (confext) with the Avocado SDK.
---

# Building Configuration Extensions

## Understanding Configuration Extensions

Configuration extensions (confext) manage the `/etc` hierarchy:
- System configuration files (`/etc/nginx/`, `/etc/systemd/`)
- Environment-specific settings
- Certificates and keys
- Service overrides

## Basic Configuration Extension

```bash
# 1. Install configuration packages
avocado-repo confext install nginx-config production-certs

# 2. Add custom configuration
mkdir -p $AVOCADO_SDK_SYSROOTS/confext/etc/nginx/sites-available
cat > $AVOCADO_SDK_SYSROOTS/confext/etc/nginx/sites-available/myapp << EOF
server {
    listen 80;
    server_name myapp.local;
    
    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
    }
}
EOF

# 3. Build configuration extension
avocado-build confext production-nginx
```

## Environment-Specific Configurations

```bash
# Development configuration
mkdir -p $AVOCADO_SDK_SYSROOTS/confext/etc/myapp
cat > $AVOCADO_SDK_SYSROOTS/confext/etc/myapp/config.yaml << EOF
environment: development
debug: true
database_url: sqlite:///tmp/dev.db
log_level: debug
EOF

avocado-build confext dev-config

# Production configuration  
cat > $AVOCADO_SDK_SYSROOTS/confext/etc/myapp/config.yaml << EOF
environment: production
debug: false
database_url: postgresql://prod-db:5432/myapp
log_level: info
ssl_enabled: true
EOF

avocado-build confext prod-config
```

## Service Overrides

```bash
# Create systemd service override
mkdir -p $AVOCADO_SDK_SYSROOTS/confext/etc/systemd/system/myapp.service.d
cat > $AVOCADO_SDK_SYSROOTS/confext/etc/systemd/system/myapp.service.d/production.conf << EOF
[Service]
Environment=APP_ENV=production
Environment=LOG_LEVEL=info
MemoryMax=1G
CPUQuota=50%
EOF

avocado-build confext prod-overrides
```