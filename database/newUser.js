const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/smallBusinessTools/newUser');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});


const userSchema = new mongoose.Schema({
  username: String,
  image: { type: String, default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEXk5ueutLepsLPo6uursbXJzc/p6+yvtbji5OWorrK2u77Z3N24vcDO0dPg4uPAxcfMz9HDx8rU19hwHDZQAAAFQklEQVR4nO2d25qrIAyFhUA9oVbf/2G31rYzbe0egaQEm/9q5q7rCyQxwrIoBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEE4IABQ9O3ULUzt5d8DMauZrFO61ubC/Idy41QdRSX050Yb9YLWje3zFwnQbcpbMbrpiqw1AljzVt5N5JixRrDvw/dLY52rRpjUDn1rHLsMJULh9D59F41Nn5tGmHbG767xnJdEGD0CuKJdVhIbzwheoqiq1D97N5W/vFVjm0kY+4AArug8JIYLzERiFSFwkZj69/9NjL5FIvd0A02kQqV4r1MYotbogmFdF2HyLvSvaMtYYoUgUKmab7YBhyFQqZJrEKFDCeG8Fdmu0+gsc4NpyYARTaHimU+rGk0gz9YGBjyBSjUMg9gjhpBlEDF34QLDnYgrUNV9akFPQIes0IzMgojwTPEMM4U9Ujvzg55Sa3oALPIinRlYBZFgkSpzSq3qAfRFyu0hyneGvwdjU6v6BYz4AnkV/VNJodAwUgioPekNzaitwa+GC4ZRRaRINLyGGZZCIKeaT5NKOSVTrCniM3ymihQ9Gy+FNOVwJrWwO1QKTWphd4BGoCj8IMdfpcfPNFTVgs8w6gsqfvzb+034dG3H77y/4OkJ973TXSGjJ+DjTzG+YBKF+v73BqNUSpRqOE2EkQ5DPcJrqk/yZobTIv2Ct2vHf0NKsEx5LdJZ4fnoJxXQT5twamhWsIs+q3K/gptrGJ76+oKTe6iPUBxDiDvLYLgLL6DtRHbH9q6gnd5jWAuvoDU2XAViVQyeaWYF5cYFpxHbKxj5lGUp/AGiZ1J8Xji9I1Igv477hZhrwNyGM29oY246T7w34Qq0wQk1D4FF+EKtc7irfiXENUJl5Bqx1MUA54/UP9oP7y6c9f3mTaBqfBx4yuwceIpLGPfGMb8ArgCMe5ywlB4ydcIqFrOo8U83MzPkuEB/gKJr6v840pU23/jdAOjtpu3eLG9s83cVvABQTWNTL8aQ68LUdV0O3QFME38Dp1PRTt3Z2nM3tRWcDqXuK4ANUv8mFOBqPXu2w+CaplxpGueG0c6rtZ9Xa7ZK59/eT9Y1SuvFenajEM4ZR5vSjV1b5bYr57C03VDW7wvhg9TFftfZbEx3L57Bjd7Vrj2gdQ4FBKC1TodPhecmYJj4NjmzvLH0j91rLF1XMRQJp3bY/bD0F6ZmZ6AMlVW4R4ZM7SY2exJgcvGL8xWtLIvVOj8elSS3gNWSeIbk88Udj7hxaJdUIxS7DLsjNTZtKoMM2GdIjqIxSRw9RmnxGt3nZznQkuWXbY3jZ2sHFP5T+0iM+uR7qROGTak32n2qz/FzzEfV+JkPDKD4zIZKHD4h0N8xHxGjqAsHVGHvPvHQtN9QgJhTCFgSKe9hQEdyC88TU9IJTLoFf0PU4QS8m6eC5jMR4NLvwTsUElkJpDh6A6mrxDPYEplFcAH3Yx9UpglRGMRzmhT3JzHAEzhxKPQboJ2XpvEMRMAgNXDxR7fJwHlgZJllbmCcCk/5wLsDjK3IOIIK4/oJlUESGtHrtGVaKH6IXKeM8+iNOGcC9O8BUBBlTQCs8+iVmO97cu1Hn4gIImQhMCKIWezChWBvvgwS6UpwOg2/ofVpAq/v0xh4kRDa2GSyC1Vwd0pjhkhDUOuW0SIN/Ngelf0xCaYLUMh2OrNJyMQml3K/EvBhoay2YZDfC5mDNQ0Bbq40pqt0+Btl5pVoQlIN7yHiK/41P69UqgJ8iWyts6L2Fbh924wz/goFQRAEQRAEQRAEQRCET/IP1+RU5rUCFhYAAAAASUVORK5CYII=' },
  email: { unique: true, type: String },
  password: String,
});

userSchema.methods.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

userSchema.methods.validPassword = password => bcrypt.compareSync(password, this.password);


const User = mongoose.model('User', userSchema);


function save(e, cb) {
  const obj = new User({
    username: e.username,
    email: e.emailAddress,
    password: userSchema.methods.generateHash(e.password),
    // password: e.password,
  });
  obj.save((err, user) => {
    cb(user._doc._id);
  });
  console.log('Data saved to MongoDB Database');
}


const funcs = { save, User };
module.exports = funcs;
