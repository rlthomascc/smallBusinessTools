// import newAgent from '../newAgent';
const newInvestment = require('../newInvestment');
// import newTransaction from '../newTransaction';


const createRecord = () => {
  newInvestment.save({
    company: 'Other',
    priceYearly: 0,
    priceMonthly: 0,
  });
};

module.exports = createRecord();
