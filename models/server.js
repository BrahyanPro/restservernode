const express = require("express");
const cors = require("cors");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.usuariosPath = "/api/usuarios";

        //middlewares
        this.middlewares();

        //Routes
        this.routes();
    }

    middlewares() {
        //cors
        this.app.use(cors());

        //lectura y parseo del Body bitch
        this.app.use(express.json());

        //El directorio Publico
        this.app.use(express.static("public"));
    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/usuarios"));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server listening on port", this.port);
        });
    }
}

module.exports = Server;