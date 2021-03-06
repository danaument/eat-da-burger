// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

var orm = {
    all: async function() {
      let queryString = `SELECT * FROM burgers;`;
      try {
        return connection.query(queryString);
      } catch (error) {
        console.log(error);
      };
    },
    create: async function(table, name) {
      let queryString = `INSERT INTO ${table} (burger_name) VALUES ('${name}')`;  //changed schema for devoured to default false because it kept passing "false" as a string instead of a boolean and I got annoyed
  
      console.log(queryString);
      try {
        return connection.query(queryString);
      } catch (error) {
        console.log(error);
      };
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: async function(table, objColVals, condition) {
      let queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      try {
        return connection.query(queryString);
      } catch (error) {
        console.log(error);
      };
    },
    delete: async function(table, condition) {
      let queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
      try {
        return connection.query(queryString);
      } catch (error) {
        console.log(error);
      }
    }
  };
  
// Export the orm object for the model (cat.js).
module.exports = orm;