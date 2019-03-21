/* eslint-disable object-shorthand */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');

// Set Storage Engine Multer
const storage = multer.diskStorage({
  destination: './client/dist/uploads',
  filename(req, file, cb) {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

// Initial Upload
const upload = multer({
  storage: storage,
  // limits: { fileSize: 1000000 },
  // fileFilter: function (req, file, cb) {
  //   checkFileType(file, cb);
  // },
}).single('image');

// Check File Type
// function checkFileType(file, cb) {

// }

const newUser = require('../database/newUser');
const session = require('../database/userSession');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/signup', (req, res) => {
  const { body } = req;
  const { user, email, pass } = body;


  if (user.length < 1) {
    res.status(400).end('Error: Username can not be blank.');
    console.log('Error: Username can not be blank!');
  } else if (email.length < 1) {
    res.status(400).end('Error: Email can not be blank!');
    console.log('Error: Email can not be blank!');
  } else if (pass.length < 1) {
    res.status(400).end('Error: Password can not be blank!');
    console.log('Error: Password can not be blank!');
  } else {
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    newUser.User.find({
      email: (req.body.email).toLowerCase(),
    }, (err, previousUsers) => {
      if (err) {
        res.status(404).end('Error: Server error');
        console.log('Error: Server error');
      } else if (previousUsers.length > 0 && previousUsers[0].email === (req.body.email).toLowerCase()) {
        res.status(400).end('Error: Account already exists.');
        console.log('Error: Account already exists.');
      } else {
        // 1. Verify Username doesn't exist
        newUser.User.find({
          username: req.body.user,
        }, (error, previous) => {
          if (error) {
            res.status(404).end('Error: Server error');
            console.log('Error: Server error');
          } else if (previous.length > 0 && previous[0].username === req.body.user) {
            res.status(400).end('Error: Account already exists.');
            console.log('Error: Account already exists.');
          } else {
            // callback function with saved id
            function bringDataBack(data) {
              // create userSession
              session.save({
                email,
                userID: data,
              });
              // return status code success
              return res.status(200).send({
                success: 'true',
                message: 'Valid sign up and sign in',
                token: data.toString(),
              });
            }
            // 2. Save
            newUser.save({
              username: user,
              emailAddress: email.toLowerCase(),
              password: pass,
            }, bringDataBack);
            // res.send('Account Created Successfully');
          }
        });
      }
    });
  }
});

app.post('/login', (req, res) => {
  const { Email, Pass } = req.body;
  if (!Email) {
    res.status(404).end('Error: Email can not be blank!');
    console.log('Error: Email can not be blank!');
  }
  if (!Pass) {
    res.status(404).end('Error: Password can not be blank!');
    console.log('Error: Password can not be blank!');
  }
  newUser.User.find({
    email: Email.toLowerCase(),
  }, (err, users) => {
    if (err) {
      res.status(404).end('Error: Server error');
      console.log('Error: Server error');
    }
    if (users.length < 1) {
      res.status(404).end('Error: Invalid');
      console.log('Error: Invalid');

    // if password is not correct
    }
    if (!bcrypt.compareSync(Pass, users[0].password)) {
    // throw error
      res.status(404).end('Error: Invalid Password');
      console.log('Error: Invalid Password!');
    }
    session.save({
      email: Email,
      userID: (users[0]._id).toString(),
    });

    res.status(200).send({
      success: 'true',
      message: 'Valid sign in',
      token: (users[0]._id).toString(),
    });
  });
});

app.post('/agent', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('index', {
        msg: err,
      });
    }
    console.log(req.file, 'FILE');
    console.log(req.body, 'BODY');
    res.send(req.file.path);
  });
});

app.post('/transaction', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('index', {
        msg: err,
      });
    }
    console.log(req.file, 'FILE');
    console.log(req.body, 'BODY');
    res.send(req.file.path);
  });
});

app.post('/investment', (req, res) => {
  console.log(req.body, 'body');
});

app.get('/verify', (req, res) => {
  // get the token;
  const { token } = req.query;
  // verify the token is one of a kind and its not deleted
  session.userSession.find({
    userId: token,
    isDeleted: false,
  }, (err, sessions) => {
    if (sessions < 1) {
      console.log('server error');
      return res.status(404).send({
        success: false,
        message: 'Error: Server error!',
      });
    }
    return res.status(200).send({
      success: true,
      message: 'Good Token',
    });
  });
});

app.patch('/logout', (req, res) => {
  // get the token;
  const { token } = req.body;
  // verify the token is one of a kind and its not deleted
  session.userSession.findOneAndUpdate({
    userId: token,
    isDeleted: false,
  }, {
    $set: {
      isDeleted: true,
    },
  }, null, (err, sessions) => {
    if (err) {
      res.send({
        success: false,
        message: 'Error: Server error!',
      });
    }
    res.send({
      success: true,
      message: 'Updated Token',
    });
  });
});

app.get('/user', (req, res) => {
  const { token } = req.query;
  newUser.User.find({
    _id: token,
  }, (err, users) => {
    if (users < 1) {
      console.log('server error');
      return res.status(404).send({
        success: false,
        message: 'Error: Server error!',
      });
    }
    return res.send(users[0]._doc.username);
  });
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
