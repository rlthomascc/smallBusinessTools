const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newInvestment');

const investmentSchema = new mongoose.Schema({
  company: { unique: true, type: String, default: '' },
  priceYearly: { type: Number, default: 0 },
  priceMonthly: { type: Number, default: 0 },
  transactions: { type: Number, default: 0 },
  grossIncome: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now() },
});

const Investment = mongoose.model('investment', investmentSchema);

function save(e) {
  const obj = new Investment({
    company: e.company,
    priceYearly: e.costPerYear,
    priceMonthly: e.costPerMonth,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}


const funcs = { Investment, save };
module.exports = funcs;
