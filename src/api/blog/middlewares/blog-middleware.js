module.exports = (config, { strapi }) => {
  return (context, next) => {
    console.log("contenxt", context.state.user);
    return next();
  };
};
