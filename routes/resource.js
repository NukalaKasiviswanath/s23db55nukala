var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronicgadgets_controller = require('../controllers/electronicgadgets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electronicgadgets ROUTES ///
// POST request for creating a electronicgadgets.
router.post('/electronicgadgets', electronicgadgets_controller.electronicgadgets_create_post);
// DELETE request to delete electronicgadgets.
router.delete('/electronicgadgets/:id', electronicgadgets_controller.electronicgadgets_delete);
// PUT request to update electronicgadgets.
router.put('/electronicgadgets/:id', electronicgadgets_controller.electronicgadgets_update_put);
// GET request for one electronicgadgets.
router.get('/electronicgadgets/:id', electronicgadgets_controller.electronicgadgets_detail);
// GET request for list of all electronicgadgets items.
router.get('/electronicgadgets', electronicgadgets_controller.electronicgadgets_list);
module.exports = router;