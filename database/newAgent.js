const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/smallBusinessTools/newAgent');

const agentSchema = new mongoose.Schema({
  name: { type: String, defualt: '' },
  title: { type: String, defualt: 'Realtor®' },
  type: { type: String, default: '' },
  split: { type: String, default: '' },
  pricePerYear: { type: String, defualt: '' },
  image: { type: String, default: '' },
  timestamp: { type: Date, default: Date.now() },
});

const Agent = mongoose.model('agent', agentSchema);

function save(e) {
  console.log(e.userID);
  const obj = new Agent({
    email: e.email,
    userId: e.userID,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}


const funcs = { Agent, save };
module.exports = funcs;
