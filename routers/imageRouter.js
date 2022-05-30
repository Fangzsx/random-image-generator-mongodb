const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController')

router.route('/')
    .get(imageController.getAllImages)

module.exports = router;