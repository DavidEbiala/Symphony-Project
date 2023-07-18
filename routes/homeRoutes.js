const router = require('express').Router();


router.get('/', async (req, res) => {
    // Get all user from the user table
    res.render("homepage");
  });


module.exports = router;