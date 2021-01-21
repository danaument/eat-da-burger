// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  all: async function() {
    const results = await orm.all();
    return results;
  },
  // The variables cols and vals are arrays.
  create: async function(burger_name) {
    const results = await orm.create("burgers", burger_name);
    return results;
  },
  update: async function(objColVals, condition) {
    const results = await orm.update("burgers", objColVals, condition);
    return results;
  },
  delete: async function(condition) {
    const results = await orm.delete("burgers", condition);
    return results;
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
