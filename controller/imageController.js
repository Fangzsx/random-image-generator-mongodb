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

exports.addImage = (req, res) => {
    const newImage = new Image({
        url : req.body.url
    })
    newImage.save()
        .then((imageToAdd) => {
            console.log(`Image to add:\n${imageToAdd}`);
            res.status(200).json({
                status : 'success',
                image : newImage
            })
        })
        .catch((error) => {
            res.status(500).json({
                status : 'fail',
                message : `An error occurred. ${error}`
            });
        })

}