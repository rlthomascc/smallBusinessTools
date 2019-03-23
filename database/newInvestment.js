const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newInvestment');

const date = new Date();
const newDate = date.toDateString();
const investmentSchema = new mongoose.Schema({
  company: { unique: true, type: String, default: '' },
  priceYearly: { type: Number, default: 0 },
  priceMonthly: { type: Number, default: 0 },
  transactions: { type: Number, default: 0 },
  grossIncome: { type: Number, default: 0 },
  timestamp: { type: String, default: newDate },
});

const Investment = mongoose.model('investment', investmentSchema);

function save(e) {
  console.log(e, 'im here');
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
