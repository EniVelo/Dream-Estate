import mongoose from"mongoose";
let itemSchema = new mongoose.Schema({
title: {
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
price:{
    type:Number,
    required:true,
},
squareMeters: {
    type: Number,
    required: true,
},
bedroom: {
    type: Number,
    required: true,
},
});

let Item= mongoose.model("Item",itemSchema);
export default Item