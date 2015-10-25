var mongoose = require('mongoose');

var TableSchema = new mongoose.Schema({
  Year: String,
  Sales: String,
  Expenses: String
}, 
{
  collection: 'example'
});

mongoose.model('Table', TableSchema);