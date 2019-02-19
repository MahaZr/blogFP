const router = require('express').Router();
const multer = require('multer');
const parser = require('body-parser');
const path = require('path');
var fs = require('fs');

const article = require('../../models/article')


var storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './server/upload')
    },
    filename: (req, file, next) => {
        const ext = file.mimetype.split('/')[1];
        next(null, file.originalname + '.' + ext)
    }
});
var upload = multer({ storage })

router.post('/imgUpload', upload.single('image'), async (req, res) => {
    console.log('file received');
    if (!req.file) {
        res.send({ 'message': 'No file received' });
    } else {
        img = req.file.originalname;
        console.log(img);
        var result;
        req.body.image = req.file.originalname;
        result = await article.create(req.body)
        res.send({ 'message': 'File uploaded successfully', data: result });
    }
});














module.exports = router;