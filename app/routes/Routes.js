const express = require('express');
const xmlController = require('../controllers/NFeReaderController');
const xmlSaveController = require('../controllers/XmlSaveController');

module.exports = (app, uri) => {
    var router = express.Router();

    app.use( (req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    router.route(`/read`)
        .post(xmlController.readXml)
        .get(xmlController.notImplemented);
    router.route('/save')
        .post(xmlSaveController.saveXml)
        .get(xmlController.notImplemented);

    app.use(`${uri}/xml`, router);
}
