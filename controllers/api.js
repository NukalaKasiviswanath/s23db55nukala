// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"electronicgadgets", ');
    res.write(' "verbs":["GET","PUT", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
    };
    exports.electronicgadgets_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
       ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await electronicgadgets.findById( req.params.id)
        // Do updates of properties
        if(req.body.electronicgadgets_type)
        toUpdate.electronicgadgets_type = req.body.electronicgadgets_type;
        if(req.body.model) toUpdate.model = req.body.model;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
       failed`);
        }
       };