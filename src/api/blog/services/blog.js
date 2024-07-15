"use strict";

/**
 * blog service
 */

const { createCoreService } = require("@strapi/strapi").factories;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "zorodangol@gmail.com",
    pass: "bwtq tjve ywwf eyxc",
  },
});

module.exports = createCoreService("api::blog.blog", ({ strapi }) => ({
  sendNewsletter(from, to, subject, text) {
    // Setup e-mail data.
    const options = {
      from,
      to,
      subject,
      text,
    };
    // Return a promise of the function that sends the email.
    return transporter.sendMail(options);
  },
}));
