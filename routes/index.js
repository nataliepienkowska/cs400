const express = require('express');
const router = express.Router();

/* route using GET method */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my page, friend!' });
});


/* route using POST method */
router.post('/post', function(req, res, next) {
  const word = req.body.word;
  const lengthOfWord = req.body.word.length;
  res.render('post', {word, lengthOfWord});
});
//{word: word.length});

module.exports = router;
