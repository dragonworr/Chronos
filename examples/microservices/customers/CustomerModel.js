const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const mongoose = require('mongoose');
const { Schema } = mongoose;

require('./chronos-config'); // Bring in config file
const myURI = process.env.CUSTOMER_URI;

mongoose.connect(myURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected!!!********* Customer Database is live!!!'))
  .catch((err) => console.log('Connection Error ', err));

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const CustomerModel = mongoose.model('CustomerModel', CustomerSchema);

module.exports = CustomerModel;
