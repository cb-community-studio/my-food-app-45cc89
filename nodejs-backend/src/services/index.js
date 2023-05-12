const users = require("./users/users.service.js");
const personalinfo = require("./personalinfo/personalinfo.service.js");
const restaurants = require("./restaurants/restaurants.service.js");
const food = require("./food/food.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(personalinfo);
  app.configure(restaurants);
  app.configure(food);
  // ~cb-add-configure-service-name~
};
