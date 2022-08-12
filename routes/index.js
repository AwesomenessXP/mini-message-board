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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Mini Messageboard',
    messages: messages,
  });
});

// get /new page
router.get('/new', (req, res, next) => {
  res.render('form')
});

// POST request from index
// this is where form data is submitted:
router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.username,
    added: new Date()
  })
  res.redirect('/') // go back to a previous page
});

module.exports = router;
