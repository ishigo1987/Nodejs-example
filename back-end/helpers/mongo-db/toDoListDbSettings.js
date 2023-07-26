"use strict";

const settings =  {

      MongoClient:require('mongodb').MongoClient,

      url:"mongodb://127.0.0.1:27017",

      dbName:"todo-list"
  };

module.exports = settings;

