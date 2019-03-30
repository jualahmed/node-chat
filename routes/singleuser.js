var express = require('express');
var router = express.Router();

/* GET users listing. */
const books=[
	{id:1,name:"book1"},
	{id:2,name:"book2"},
	{id:3,name:"book3"},
	{id:4,name:"book4"},
]
router.post('/', function(req, res, next) {
  res.send(books);
});

module.exports = router;
