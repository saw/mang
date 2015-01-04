"use strict";
//This is the stupidest possible data store. No locking, corruption seems
//likely. Reads are always from memory, disk only updated as backup.
//Supports only one node process, one schema. Do not use at home

var fs = require('fs');
var locked = false;
var _ = require('lodash');
var data;

// load data from disk, no error checking
if(fs.existsSync('data.json')) {
   data = JSON.parse(fs.readFileSync('data.json'));
} else {
   data = {};
}

function saveState() {
   fs.writeFile('data.json', JSON.stringify(data), function(err) {
      if (err) {
         throw err;
      }
      console.log('updated store written');
   })
}

function set(key, value) {
   data[key] = value;
   saveState();
}

function get(key) {
   return data[key];
}

function getAll() {
   var out = [];
   var key;
   var thisObj;
   for(key in data) {
      thisObj = _.clone(data[key]);
      thisObj.id = key;
      out.push(thisObj);
   }

   return out;
} 

module.exports = {
   get:get,
   set:set,
   getAll:getAll
};