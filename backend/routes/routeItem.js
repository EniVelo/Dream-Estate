import express from "express";
import modelItem from "../models/modelItem.js";
import multer from "multer";
import {v4 as uuidv4 } from 'uuid'
import path from"path"

let app =express();
// Konfigurimet e nevojshme per upload e imazheve ne mongoDB
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) {
    cb(null, 'images'); },
    filename: function (req, file, cb) {
    cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
    } })
    const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
     if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true); 
    } else {
    cb(null, false) }};
    let upload = multer({ storage, fileFilter });

    // CRUD => Create, Read, Update, Delete
    // Create
    app.post("/addItem",upload.array("photos",5), async (req,res)=>{
        try{
            let newItem= new modelItem({  // Merrja dhe ruajtja te dhenat nga frontend 
                ...req.body,
                photos: req.files.map(file => file.filename),
            });
            await newItem.save();// Ruajtje e te dhenave ne mongo DB
            res.status(200).send("newItem");
        }catch (err){
res.status(500).send("Item not added"+err);
            }
        
    });

    //Read all
app.get("/readItems", async (req,res)=> {
    try{
        let items = await modelItem.find({});
        res.status(200).send(items);
    }catch(err){
        res.status(500).send("Not read");
    }
});

  //Read one
  app.get("/readItem/:id", async (req,res)=> {
    try{
        let itemId =req.params.id; // Marrja e vleres se id-se nga frontend 
        let item = await modelItem.findById({_id:itemId});
        res.status(200).send(item);
    }catch(err){
        res.status(500).send("Not read");
    }
});

//Delete
app.delete("/deleteItem/:id", async (req,res)=> {
    try{
        let itemId =req.params.id;
        await modelItem.deleteOne({_id: itemId });// Fshirja e elementit me id e percaktuar
        res.status(200).send("Deleted");
    }catch(err){
        res.status(500).send("Not Deleted");
    }
});
// Update
app.patch("/updateItem/:id",upload.single("photo"), async (req,res)=>{
    try{
        let itemId =req.params.id;
        let infoItem={...req.body};
        if (req.file) {     // Kontrolli nese imazhi/foto eshte ndryshuar
            infoItem.photo = req.file.filename;
            }
        let updatedItem = await modelItem.findByIdAndUpdate(  // Update ne mongo DB
            {_id:itemId},
             {$set:infoItem},
             {new:true})
        res.status(200).send(updatedItem);
    }catch (err){
res.status(500).send("Item not updated"+err);
        }
    
});

export default app