// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OmniMorph Wiki",
  tagline: "OmniMorph 模型、衣柜与脚本文档",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://wiki.figuramc.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "AIH-Interactive", // Usually your GitHub org/user name.
  projectName: "omp-wiki", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // The wiki is Chinese-first. All prose, labels and navigation are Simplified
  // Chinese; API identifiers and code stay in English.
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/AIH-Interactive/omp-wiki/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "description",
          content:
            "OmniMorph 中文文档：Figura 与 YSM 模型、衣柜、装饰、配装、模型库、Lua 与 Molang。",
        },
        {
          name: "keywords",
          content:
            "OmniMorph, Figura, YSM, Minecraft, 模型, 衣柜, 装饰, 配装, Lua, Molang",
        },
      ],
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "OmniMorph 文档",
        logo: {
          alt: "OmniMorph Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/start_here/OmniMorph",
            label: "开始使用",
            position: "left",
          },
          {
            to: "/omnimorph",
            label: "OmniMorph 功能",
            position: "left",
          },
          {
            to: "/scripting",
            label: "脚本 API",
            position: "left",
          },
          {
            href: "https://github.com/AIH-Interactive/omp-wiki",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "文档",
            items: [
              {
                label: "开始使用",
                to: "/start_here/OmniMorph",
              },
              {
                label: "OmniMorph 功能",
                to: "/omnimorph",
              },
              {
                label: "脚本 API",
                to: "/scripting",
              },
            ],
          },
          {
            title: "项目",
            items: [
              {
                label: "OmniMorph GitHub",
                href: "https://github.com/AIH-Interactive/omni-morph",
              },
              {
                label: "Figura 上游",
                href: "https://github.com/FiguraMC/Figura",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "问题反馈",
                href: "https://github.com/AIH-Interactive/omni-morph/issues",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OmniMorph 项目组`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["lua", "json"],
        magicComments: [
          {
            className: "code-block-highlighted-line",
            line: "highlight-next-line",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "error-next-line",
            block: { start: "error-start", end: "error-end" },
          },
        ],
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        disableVersioning: true,
      },
    ],
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
};

module.exports = config;
