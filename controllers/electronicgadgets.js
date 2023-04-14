var electronicgadgets = require('../models/electronicgadgets');
// List of all electronicgadgets
exports.electronicgadgets_list = function(req, res) {
res.send('NOT IMPLEMENTED: electronicgadgets list');
};
// for a specific electronicgadgets.
exports.electronicgadgets_detail = function(req, res) {
res.send('NOT IMPLEMENTED: electronicgadgets detail: ' + req.params.id);
};
// Handle electronicgadgets create on POST.
exports.electronicgadgets_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: electronicgadgets create POST');
};
// Handle electronicgadgets delete form on DELETE.
exports.electronicgadgets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: electronicgadgets delete DELETE ' + req.params.id);
};
// Handle electronicgadgets update form on PUT.
exports.electronicgadgets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: electronicgadgets update PUT' + req.params.id);
};

// List of all electronicgadgets
exports.electronicgadgets_list = async function(req, res) {
    try{
    theelectronicgadgets = await electronicgadgets.find();
    res.send(theelectronicgadgets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.electronicgadgets_view_all_Page = async function(req, res) {
    try{
    theelectronicgadgets = await electronicgadgets.find();
    res.render('electronicgadgets', { title: 'electronicgadgets Search Results', results: theelectronicgadgets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle electronicgadgets create on POST.
    exports.electronicgadgets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new electronicgadgets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"electronicgadgets_type":"goat", "cost":12, "size":"large"}
    document.electronicgadgets_type = req.body.electronicgadgets_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   