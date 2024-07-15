"use strict";

/**
 * tag controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::tag.tag", ({ strapi }) => ({
  async create(ctx) {
    const { body } = ctx.request;
    console.log("body", body);
    body.data.publishedAt = new Date();
    const result = await strapi.entityService.create("api::tag.tag", {
      data: body.data,
    });
    if (result) {
      strapi
        .service("api::blog.blog")
        .sendNewsletter(
          "zorodangol@gmail.com",
          "zorodangol@gmail.com",
          "Tags Added",
          "created blog with title nodemailer"
        );
    }
    return result;
  },
}));
