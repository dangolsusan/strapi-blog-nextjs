module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "POST",
      path: "/blogs/review",
      handler: "blog.create",
    },
    {
      // Path defined with a regular expression
      method: "GET",
      path: "/blogs/review", // Only match when the URL parameter is composed of lowercase letters
      handler: "blog.findReview",
    },
    {
      method: "POST",
      path: "/blogs/order",
      handler: "blog.createOrder",
    },
  ],
};
