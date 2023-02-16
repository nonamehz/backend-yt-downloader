const express = require('express');
const cors = require('cors');


class Server {
    constructor() {
        this.app = express();
        this.path = {
            download: '/api/download',
        };
        this.port = process.env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.path.download, require('../routes/yt-downloader'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }


}


module.exports = Server;