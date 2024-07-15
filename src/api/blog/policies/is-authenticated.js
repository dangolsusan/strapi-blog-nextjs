const { errors } = require("@strapi/utils");
const { ApplicationError } = errors;
module.exports = (policyContext, config, { strapi }) => {
  if (!policyContext.state.isAuthenticated) {
    const error = new ApplicationError(
      "The owner of the restaurant cannot submit reviews",
      {
        policy: "is-owner-review",
        errCode: "RESTAURANT_OWNER_REVIEW", // can be useful for identifying different errors on the front end
      }
    );
    error.name = "OwnerReviewError";
    throw error;
  }
  return true;
};
