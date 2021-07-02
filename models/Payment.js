const mongoose = require('mongoose');
require('mongoose-long')(mongoose);

var Long = mongoose.Schema.Types.Long;

const PaymentSchema = new mongoose.Schema({
  id: Long,
  creditCardNumber: {
    type: String,
    required: true,
  },
  cardholderName: {
    type: String,
    required: true,
  },
  cvv: {
    type: String,
    required: true,
  },
  value: {
    type: Long,
    required: true,
  },
});

module.exports = mongoose.model('Payment', PaymentSchema);