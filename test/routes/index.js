var express = require('express');
var router = express.Router();
var routeMongoose = require('mongoose');
var table = routeMongoose.model('Table');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//declare a path/mydata
router.get('/mydata', function(req, res, next) {
    table.find({ContestId: 5}, { Name: 1 }, function(err,data){
      console.log(data);
      if(err){return next(err);}
      res.json(data);
    });
});



module.exports = router;


