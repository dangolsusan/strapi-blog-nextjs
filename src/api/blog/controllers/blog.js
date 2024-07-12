"use strict";
/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async create(ctx) {
    const { body } = ctx.request;
    console.log("body", body);
    body.data.users_permissions_user = ctx.state.user.id;
    body.data.publishedAt = new Date();
    const result = await strapi.entityService.create("api::blog.blog", {
      data: body.data,
    });
    return result;
  },
}));
