const express = require("express");
const router = express.Router();

const controller = require('./controller');
const prefix = 'users';

router.get(`/${prefix}`, controller.findAll);
router.get(`/${prefix}/add`, controller.add);

module.exports = router;

