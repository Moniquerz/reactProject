const express = require('express');
const router = express.Router();

// @route   GET api/listings/test
// @desc    Test listings route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Listings route works' }));

module.exports = router;