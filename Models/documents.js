const moongose = require("mongoose");

const ProductSchema = moongose.Schema (
    {
        id: {type:String, require:true, unique:true},
        docs: {type:Array},
    },
    { timestamps:true},
);

module.exports = moongose.model('documents', ProductSchema);