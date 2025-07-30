# Avocado Linux Documentation

This is the documentation site for Avocado Linux, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 📁 Project Structure

```
docs/
├── src/
│   ├── docs/              # Documentation pages
│   │   ├── index.mdx      # Homepage
│   │   ├── guides/        # SDK guides and tutorials
│   │   ├── hardware/      # Hardware-specific documentation
│   │   └── community/     # Community guidelines
│   ├── static/            # Static assets (images, files)
│   │   └── img/          # Images referenced in docs
│   └── css/
│       └── custom.css     # Custom styling
├── public/                # Public assets
│   └── favicon.svg       # Site favicon
├── docusaurus.config.js   # Docusaurus configuration
├── sidebars.js           # Sidebar navigation structure
└── package.json          # Dependencies and scripts
```

## 📝 Contributing

### Adding New Pages

1. Create a new `.md` or `.mdx` file in the appropriate directory under `src/docs/`
2. Add the page to `sidebars.js` if you want it to appear in the navigation
3. Use frontmatter to set the title and description:

```markdown
---
title: Your Page Title
description: Brief description of the page
---

# Your Page Title

Content goes here...
```

### Adding Images

1. Place images in `src/static/img/`
2. Reference them in markdown using `/img/your-image.png`

### Updating Navigation

Edit `sidebars.js` to modify the sidebar structure. The format is:

```javascript
{
  type: 'category',
  label: 'Category Name',
  items: [
    'path/to/doc',
    'another/doc',
  ],
}
```

## 🔧 Configuration

The main configuration is in `docusaurus.config.js`. Key settings include:

- **Site metadata**: Title, tagline, URL
- **Navigation**: Navbar links and footer
- **Theme**: Colors and styling options
- **Plugins**: Additional functionality

## 🌐 Deployment

The site is configured to deploy to `https://docs.avocadolinux.org`. 

For manual deployment:

```bash
npm run build
npm run serve  # Test the build locally
```

## 📚 Migration Notes

This site was migrated from Astro Starlight to Docusaurus. Key changes:

- **Content Structure**: Moved from `src/content/docs/` to `src/docs/`
- **Static Assets**: Moved from `public/` to `src/static/`
- **Image References**: Updated from relative paths to `/img/` paths
- **Configuration**: Replaced `astro.config.mjs` with `docusaurus.config.js`
- **Sidebar**: Converted from Starlight format to Docusaurus sidebar configuration
- **Styling**: Replaced Starlight themes with custom CSS

## 🔗 Links

- [Avocado Linux GitHub](https://github.com/avocado-linux/meta-avocado)
- [Community Discord](https://discord.com/invite/rH77fKpKAj)
- [Peridio Website](https://www.peridio.com/)
- [Docusaurus Documentation](https://docusaurus.io/docs)

## 📄 License

Documentation is licensed under the same terms as the Avocado Linux project.