const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow , unfollow , name_fix } = require('../controllers/user');

const router = express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow);

// POST /user/name-fix
router.post('/name-fix', isLoggedIn, name_fix);


module.exports = router;