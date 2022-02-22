var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Add cars 
router.get('/add-cars', function(req, res) {
  res.render('add-cars')
})

router.post('/add-cars', function(req, res, next) {
  res.send("ok")
  //var data = req.body
  //console.log(data)
  //await data.save()
  //res.send(data.json())
})

//List Cars
router.get("/list-cars", function(req, res) {
  res.render("list-cars")
})

router.post('/list-cars', function(req, res, next) {
  res.send("ok")
  //var data = req.body
  //console.log(data)
  //await data.save()
  //res.send(data.json())
})

//Add Users
router.get("/add-users", function(req, res) {
  res.render("add-users")
})

router.post('/add-users', function(req, res, next) {
  res.send("ok")
  //var data = req.body
  //console.log(data)
  //await data.save()
  //res.send(data.json())
})

//List Users
router.get("/list-users", function(req, res) {
  res.render('list-users')
})

router.post('/list-users', function(req, res, next) {
  res.send("ok")
  //var data = req.body
  //console.log(data)
  //await data.save()
  //res.send(data.json())
})

module.exports = router;
