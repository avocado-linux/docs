/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Introduction",
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "index",
          label: "Avocado OS",
        },
      ],
    },
    {
      type: "category",
      label: "Hardware",
      items: [
        "supported-hardware/overview",
        "supported-hardware/jetson-orin-nano",
        "supported-hardware/rpi-4",
        "supported-hardware/imx-8m-plus",
      ],
    },
    {
      type: "category",
      label: "SDK User Guide",
      items: [
        "guides/sdk-architecture",
        "guides/development-environment",
        "guides/getting-started",
      ],
    },
    {
      type: "category",
      label: "Community",
      items: ["community/coc", "community/privacy"],
    },
  ],
};

module.exports = sidebars;
