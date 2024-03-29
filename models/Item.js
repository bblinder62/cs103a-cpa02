'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var itemSchema = Schema( {
  creator: String,
  title : String,
  description: String,
  solved : Boolean,
  project : String
} );

module.exports = mongoose.model( 'Item', itemSchema );
