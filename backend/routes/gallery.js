const router = require('express').Router()
const Gallery = require('../models/Gallery')
const uploadCloud = require('../helpers/cloudinary')

router.post('/create_new', uploadCloud.single('photoURL'), (req, res, next) => {
  Gallery.create({...req.body, photoURL: req.file.url})
  .then(photo => {
    res.status(201).json(photo)
  })
  .catch(err => next(err))
})

router.get('/all', (req, res, next) => {
  Gallery.find().then(photos => res.status(200).json(photos)).catch(err => console.log(err))
})

router.get('/category/:category', (req, res, next) => {
  const {category} = req.params
  Gallery.find({category}).then(photos => res.status(200).json(photos)).catch(err => console.log(err))
})



module.exports = router