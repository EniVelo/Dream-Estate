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
    app.post("/addItem", upload.any("photo"), async (req, res) => {
        try {
            let { price, squareMeters, bedroom } = req.body;
    
            if (!squareMeters || squareMeters <= 0) {
                return res.status(400).send("Square meters must be greater than zero");
            }
    
            if (!bedroom || bedroom <= 0) {
                return res.status(400).send("Bedroom count must be greater than zero");
            }
    
            if (!price || price <= 0) {
                return res.status(400).send("Price must be greater than zero");
            }
    
            let newItem = new modelItem({
                ...req.body,
                photo: req.files.map(file => file.filename),
            });
    console.log(newItem);
            await newItem.save(); // Ruajtje ne MongoDB
    
            res.status(200).send(newItem); 
        } catch (err) {
            res.status(500).send("Item not added: " + err);
        }
    });
    

    //Read all
    app.get("/readItems", async (req,res)=> {
        try {
            let query = {};
            if (req.query.bedroom) {
                query.bedroom = parseInt(req.query.bedroom);
            }
            let items = await modelItem.find({});
            let updatedItems = items.map(item => ({
                ...item._doc,
                pricePerSquareMeter: item.price / item.squareMeters
            }));
    
            res.status(200).send(updatedItems); 
        } catch (err) {
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