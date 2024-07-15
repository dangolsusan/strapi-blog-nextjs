"use strict";
/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async create(ctx) {
    ctx.query = { ...ctx.query, locale: "en" };
    ctx.request.body.data.users_permissions_user = ctx.state.user.id;
    const result = await super.create(ctx);

    // your custom logic for modifying the output
    result.meta.date = Date.now(); // change the date that is returned

    // if (result) {
    //   strapi
    //     .service("api::blog.blog")
    //     .sendNewsletter(
    //       "zorodangol@gmail.com",
    //       "zorodangol@gmail.com",
    //       "Blog Added",
    //       "created blog with title nodemailer"
    //     );
    // }
    return result;
  },
  // async create(ctx) {
  //   const { body } = ctx.request;
  //   console.log("body", body);
  //   body.data.users_permissions_user = ctx.state.user.id;
  //   body.data.publishedAt = new Date();
  //   const result = await strapi.entityService.create("api::blog.blog", {
  //     data: body.data,
  //   });
  //   console.log("result", result);
  //   if (result) {
  //     strapi
  //       .service("api::blog.blog")
  //       .sendNewsletter(
  //         "zorodangol@gmail.com",
  //         "zorodangol@gmail.com",
  //         "Blog Added",
  //         "created blog with title nodemailer"
  //       );
  //   }
  //   return result;
  // },

  //test for custom route controller
  async createReview(ctx) {
    const { body } = ctx.request;
    console.log("body", body);
    body.data.users_permissions_user = ctx.state.user.id;
    body.data.publishedAt = new Date();
    const result = await strapi.entityService.create("api::blog.blog", {
      data: body.data,
    });
    return result;
  },

  async findReview(ctx) {
    ctx.body = "hello world";

    return ctx;
  },
}));
