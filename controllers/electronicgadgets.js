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
   // for a specific electronicgadgets.
exports.electronicgadgets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await electronicgadgets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

exports.electronicgadgets_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await electronicgadgets.findById( req.params.id)
// Do updates of properties
if(req.body.electronicgadgets_type)
toUpdate.electronicgadgets_type = req.body.electronicgadgets_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
// Handle electronicgadgets delete on DELETE.
exports.electronicgadgets_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await electronicgadgets.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.electronicgadgets_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await electronicgadgets.findById( req.query.id)
    res.render('electronicgadgetsdetail',
    { title: 'electronicgadgets Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a electronicgadgets.
// No body, no in path parameter, no query.
// Does not need to be async
exports.electronicgadgets_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('electronicgadgetscreate', { title: 'electronicgadgets Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a electronicgadgets.
// query provides the id
exports.electronicgadgets_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await electronicgadgets.findById(req.query.id)
    res.render('electronicgadgetsupdate', { title: 'electronicgadgets Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.electronicgadgets_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await electronicgadgets.findById(req.query.id)
    res.render('electronicgadgetsdelete', { title: 'electronicgadgets Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };