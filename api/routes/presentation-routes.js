  'use strict';

  var slideCtrl = require('../controllers/presentation-controller');
  const express = require("express");

  module.exports = function(app) {
      let presentationRouter = express.Router();
      presentationRouter.get('/', slideCtrl.getPresentations);
      presentationRouter.get('/:name', slideCtrl.getPresentation);

      presentationRouter.post('/save', slideCtrl.savePresentation);
      app.use('/presentations', presentationRouter);
  };