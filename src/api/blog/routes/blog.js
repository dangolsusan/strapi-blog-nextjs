"use strict";

/**
 * blog router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::blog.blog", {
  config: {
    find: {
      policies: ["is-authenticated"],
      middlewares: ["api::blog.blog-middleware"],
    },
  },
});
