/**
 * Apis.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title:{
      type: 'string'
    },
    body: {
      type: 'string'
    },
    environment: {
      type: 'string'
    },
  },
datastore : 'mongodb'
};
