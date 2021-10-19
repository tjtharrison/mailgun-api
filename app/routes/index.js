const express = require('express');
const router = express.Router();
const mailgunSend = require('../bin/mailgun');

/* GET home page. */
router.post('/mail/send', function (req, res, next) {
    mailgunSend(req,res)
});

module.exports = router;
