const express = require('express');
const async = require("hbs/lib/async")
const { find } = require("../models/db")
const router = express.Router();

//DB
const db = require("../models/db")
const cars = require("../models/cars")

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index');
});

router.get("/api", async (req, res) => {
  const coches = await cars.find({})
  res.json(coches)
})

//Add cars 
router.get('/add-cars', (req, res) => {
  res.render('add-cars')
})

router.post('/add-cars-form', async (req, res, next) => {
  const data = new cars(req.body)
  await data.save()
  res.redirect("/add-cars")
})

router.get("/add-cars-form", async (req, res, next)  => {
  const data = await cars.find({})
  res.json(data)
})

//List Cars
router.get("/list-cars", async (req, res, next) => {
  const coches = await cars.find({})
  res.render('list-cars', {coches})
})

//Update y eliminar cars
router.get("/update-car/:id", async (req, res, next) => {
  const coche_encontrado = await cars.findById(req.params.id)
  res.render("update-car", {coche_encontrado})
})

router.put('/updated-car/:id', async (req, res, next) => {
  await cars.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/list-cars')
})

router.delete('/delete-car/:id', async (req, res) => {
  await cars.findByIdAndDelete(req.params.id)
  res.redirect('/list-cars')
})

//Add Users
router.get("/add-users", (req, res) => {
  res.render("add-users")
})

router.post('/add-users-form', async (req, res, next) => {
  const data = new db(req.body)
  await data.save()
  res.redirect("/add-users")
})

router.get("/add-users-form", async (req, res, next)  => {
  const data = await db.find({})
  res.json(data)
})

//List Users
router.get("/list-users", async (req, res, next) => {
  const usuarios = await db.find({})
  res.render('list-users', {usuarios})
})

//Update y eliminar users
router.get("/update-user/:id", async (req, res, next) => {
  const usuario_encontrado = await db.findById(req.params.id)
  res.render("update-user", {usuario_encontrado})
})

router.put('/updated-user/:id', async (req, res, next) => {
  await db.findByIdAndUpdate(req.params.id, req.body)
  res.redirect('/list-users')
})

router.delete('/delete-user/:id', async (req, res) => {
  await db.findByIdAndDelete(req.params.id)
  res.redirect('/list-users')
})

module.exports = router;
