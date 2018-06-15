var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//uses elastic search to replicate data from mongodb
//connects mongo and elastic
var mongoosastic = require('mongoosastic');

var ProductSchema = new Schema({
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  name: String,
  price: Number,
  image: String
});

ProductSchema.plugin(mongoosastic, {
  hosts: [
    'localhost:9200'
  ]
});
module.exports = mongoose.model('Product', ProductSchema);
