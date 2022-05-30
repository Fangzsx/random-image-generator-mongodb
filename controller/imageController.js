const Image = require('../model/image');

exports.getAllImages = (req, res) => {
    Image.find()
        .then((result) => {
            res.send(result);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
}