const express = require('express');
const router = express.Router();

// only execute middleware on this router
const handlebarsHelper = require('../helpers/handlebars');
router.use(handlebarsHelper.middleware);

// Track page views in Google Analytics

router.use(require('./login'));
router.use('/account/', require('./account'));
router.use('/dashboard/', require('./dashboard'));

module.exports = router;