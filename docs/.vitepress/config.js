module.exports = {
  base: "/jtp-resources/",
  title: "凯捷青年人才培养学习资源库",
  description: "Just playing around.",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: false,
    nav: [
      // { text: "Getting Started", link: "/getting-started" },

      {
        text: "Helpful Websites",
        items: [{ text: "For FE", link: "/bookmarks" }],
      },
      {
        text: "Learning Resources",
        link: "/learning-resources",
      },
      {
        text: "Readable articles",
        link: "/articles",
      },
      {
        text: "Useful software",
        link: "/software",
      },
    ],
    // sidebar: [
    //   {
    //     text: "Guide",
    //     items: [{ text: "Getting Started", link: "/getting-started" }],
    //   },
    // ],
  },

  head: [
    ["link", { rel: "icon", href: "/logo.svg", type: "image/svg+xml" }],
    // ["script", { src: "/test.js", type: "module" }],
  ],
};
