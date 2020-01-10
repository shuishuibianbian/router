const mongoose = require('mongoose')
// const userSchema = require('./userModel')
let userAccess = mongoose.Schema({
    name:{type:String,required:true},
    pro:{type:String,required:true}
})
let userAccessModel = mongoose.model('access',userAccess,'access')
module.exports = userAccessModel