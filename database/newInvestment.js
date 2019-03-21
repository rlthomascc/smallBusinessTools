const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newInvestment');

const investmentSchema = new mongoose.Schema({
  company: { type: String, default: '' },
  priceYearly: { type: String, default: '' },
  priceMonthly: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now() },
});

const Investment = mongoose.model('investment', investmentSchema);

function save(e) {
  console.log(e.userID);
  const obj = new Investment({
    email: e.email,
    userId: e.userID,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}


const funcs = { Investment, save };
module.exports = funcs;
