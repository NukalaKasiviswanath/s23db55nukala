var express = require('express');
const electronicgadgets_controlers= require('../controllers/electronicgadgets');
var router = express.Router();
/* GET electronicgadgetss */
router.get('/', electronicgadgets_controlers.electronicgadgets_view_all_Page );


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electronicgadgets', { title: 'Search Result' });
});
router.get('/detail', electronicgadgets_controlers.electronicgadgets_view_one_Page);
router.get('/create', electronicgadgets_controlers.electronicgadgets_create_Page);
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }

router.get('/update', electronicgadgets_controlers.electronicgadgets_update_Page);
router.get('/delete', electronicgadgets_controlers.electronicgadgets_delete_Page);
module.exports = router;