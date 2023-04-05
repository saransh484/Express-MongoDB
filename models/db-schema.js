const mongoose = require('mongoose')

const EntitySchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    tech:{
        type:String,
        required : true
    },
    stu:{
        type:Boolean,
        required : true,
        default:false
    }

})

module.exports = mongoose.model('Entity', EntitySchema, 'REST')