'use strict';
var data = require('../data/data-access');

exports.getPresentations = (req, res) => {
    return res.send(data.getPresentationsData());
}

exports.getPresentation = (req, res) => {
    let name = req.params.name;

    if (!name || name.length == 0) {
        res.statusCode = 400
        res.send({ error: `Parameters ${JSON.stringify(req.params)} not valid` });
    }

    try {
        let content = data.getPresentationContent(name);
        res.setHeader('content-type', 'text/plain');
        res.statusCode = 200;
        res.send(content);
    } catch (e) {
        res.statusCode = 400
        res.send({ error: e });
    }
}

exports.savePresentation = (req, res) => {
    let name = req.body.name;
    let content = req.body.content;

    if (!name || name.length == 0) {
        res.statusCode = 400
        res.send({ error: `Parameters ${JSON.stringify(req.body)} not valid` });
    }

    try {
        if (data.savePresentationContent(name, content)) {
            res.statusCode = 200;
            res.send();
        }
    } catch (e) {
        res.statusCode = 400
        res.send({ error: e });
    }
}