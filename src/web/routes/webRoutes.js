const express = require('express');
const router = express.Router();
const { renderHomePage } = require('../../controllers/webControllers');

router.get('/', renderHomePage);

module.exports = router;