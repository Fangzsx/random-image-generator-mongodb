const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController')

router.route('/')
    .get(imageController.getAllImages)
    .post(imageController.addImage)

module.exports = router;