const mongoose = require("mongoose");

const EmailTemplateSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId, ref : "User" , required : true},
    subject : {type : String, required : true},
    body : {type : String, required : true},
    createdAt : {type : Date , default : Date.now}, 
});

module.exports = mongoose.model("EmailTemplate", EmailTemplateSchema);