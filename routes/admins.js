const express = require('express');
const router = express.Router();

const content = [
  {
    user: "haskmoney",
    password: "lmao123"
  },
  {
    user: "josh",
    password: "slimjim456"
  },
];

router.get('/', (req, res, next) => {
  res.render('login', {
    content: content,
  })
});

router.get('/login', (req, res, next) => {
  res.render('new_admin')
});

router.post('/login', (req, res, next) => {
  // add a new admin to the object
  content.push({
    user: req.body.user,
    password: req.body.password,
  })

  // go back to previous page:
  res.redirect('/admins');
});

module.exports = router;
