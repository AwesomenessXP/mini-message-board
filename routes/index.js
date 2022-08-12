const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Heyyyyy",
    user: "haskmoney",
    added: new Date(),
  }
];

// ---------------------------------------- GET REQUESTS ------------------------------------

router.get('/', function(req, res, next) {
  res.render('index', { // render the view, add the data to be rendered
    title: 'Mini Messageboard',
    messages: messages,
  });
});

router.get('/secret', (req, res, next) => {
  const greetings = [ // this object has to be const!
    "Ahoy!",
    "Howdy!",
    "Yooooo"
  ];

  res.render('secret', {
    greetings: greetings,
  });
});

// get /new page
router.get('/new', (req, res, next) => {
  res.render('form')
});

//---------------------------------------- POST requests-----------------------------

// this is where form data is submitted:
router.post('/new', (req, res, next) => {
  // add a new message to the object
  messages.push({
    text: req.body.messageText,
    user: req.body.username,
    added: new Date()
  })
  res.redirect('/') // go back to a previous page
});

module.exports = router;
