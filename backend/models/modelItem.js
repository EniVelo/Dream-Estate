import mongoose from"mongoose";
let itemSchema = new mongoose.Schema({
name: {
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
photo:{
    type:String,
    required:true,
},
});

let Item= mongoose.model("Item",itemSchema);
export default Item