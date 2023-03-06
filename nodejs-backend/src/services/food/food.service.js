const { Food } = require('./food.class');
const createModel = require('../../models/food.model');
const hooks = require('./food.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/food', new Food(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('food');

  service.hooks(hooks);
};