const mongoose = require("mongoose")
const electronicgadgetsSchema = mongoose.Schema({
phone: String,
model: String,
price: Number
})
module.exports = mongoose.model("electronicgadgets",
electronicgadgetsSchema)