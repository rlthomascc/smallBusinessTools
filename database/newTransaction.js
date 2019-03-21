const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newTransaction');

const transactionSchema = new mongoose.Schema({
  address: { type: String, default: '' },
  totalPrice: { type: String, default: '' },
  commission: { type: String, default: '' },
  typeOf: { type: String, default: '' },
  agent: { type: String, default: '' },
  leadSource: { type: String, default: '' },
  lender: { type: String, default: '' },
  tcFee: { type: String, default: '' },
  image: { type: String, default: 'https://picsum.photos/300/300/?random' },
  closeDate: { type: Date, default: Date.now() },
  timestamp: { type: Date, default: Date.now() },
});

const Transaction = mongoose.model('transaction', transactionSchema);

function save(e) {
  console.log(e.userID);
  const obj = new Transaction({
    email: e.email,
    userId: e.userID,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}


const funcs = { Transaction, save };
module.exports = funcs;
