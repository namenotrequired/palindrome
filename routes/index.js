

var express = require('express');
var router = express.Router();

var checkPalindrome = require('../services/checkPalindrome');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Palindrome Checker' });
});

/* POST check palindrome API */
router.post('/check-palindrome', function(req, res, next) {
    var text = req.body.text;
    // if (!text) { // Commented out because I guess '' is a palindrome!
    //     return res.sendStatus(400);
    // }

    if (checkPalindrome(text)) {
        return res.sendStatus(200);
    }

    return res.sendStatus(400);
});

module.exports = router;
