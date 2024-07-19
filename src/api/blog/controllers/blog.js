"use strict";
/**
 * blog controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const stripe = require("stripe")(
  process.env.STRAPI_ADMIN_TEST_STRIPE_SECRET_KEY
);

module.exports = createCoreController("api::blog.blog", ({ strapi }) => ({
  async createOrder(ctx) {
    // ctx.body = "hello world";
    const { body } = ctx.request;

    const charge = await stripe.paymentIntents.create(JSON.parse(body));

    let createOrder = [];

    const datos = {
      data: {
        game: "dota 2",

        user: 5,

        totalPayment: 5000,

        idPayment: charge.id,

        adressesShipping: "khokana lalitpur",
      },
    };

    const validData = await strapi.service("api::blog.blog").create(datos);

    createOrder.push(validData);

    const sanitizedEntity = await this.sanitizeOutput(createOrder, ctx);

    // console.log(sanitizedEntity);

    return this.transformResponse(charge);
    // return ctx;
  },

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
