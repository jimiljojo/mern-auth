const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");

// Load quote model
const Quote = require("../../models/Quote");
router.get("/",(req,res) => {
  return Quote.find({}, (err, quotes) => 
  res.send(quotes.reduce((quoteMap, item) => {
    quoteMap[item.id] = item
      return quoteMap
  }, {}))
);


});
router.post("/", (req,res) => {
  console.log(req.body.body);
  const newquote = new Quote({
    body: req.body.body,
    author: req.body.author,
    addDate: req.body.addDate
  });
  newquote.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
});

  module.exports = router;
