const { Router } = require('express');

const { getData } = require('../controllers/yt-downloader');


const router = Router();

router.get('/', getData);


module.exports = router;