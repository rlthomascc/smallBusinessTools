const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newAgent');

const agentSchema = new mongoose.Schema({
  name: { unique: true, type: String, default: '' },
  title: { type: String, default: 'Realtor®' },
  type: { type: String, default: '' },
  split: { type: Number, default: 0 },
  pricePerYear: { type: Number, default: 0 },
  image: { type: String, default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' },
  transactions: { type: Number, default: 0 },
  goal: { type: Number, default: 0 },
  grossIncome: { type: Number, default: 0 },
  timestamp: { type: Date, default: Date.now() },
});

const Agent = mongoose.model('agent', agentSchema);

function save(e) {
  console.log(e, 'IN DATABASE');
  const obj = new Agent({
    name: e.name,
    title: e.title,
    type: e.type,
    split: e.split,
    pricePerYear: e.pricePerYear,
    image: e.image,
    goal: e.goal,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}


const funcs = { Agent, save };
module.exports = funcs;
