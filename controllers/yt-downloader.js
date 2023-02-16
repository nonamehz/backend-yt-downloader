const { request, response } = require('express');
const ytdl = require('ytdl-core');


const getData = async (req = request, res = response) => {

    const { url } = req.query;

    const isValidUrl = await ytdl.validateURL(url);

    if (!isValidUrl) {
        const error = new Error('URL NO VALIDO');
        return res.status(400).json({
            msg: error.message
        });
    }

    try {

        const videoId = await ytdl.getURLVideoID(url);
        const metInfo = await ytdl.getInfo(url);

        const data = {
            url: `https://www.youtube.com/embed/${videoId}`,
            info: metInfo.formats,
        }

        return res.json(data);

    } catch (error) {
        return res.status(500).json({
            msg: 'Hable con el Administrador.'
        });
    }
}


module.exports = {
    getData,
}