import express from "express";
import modelContact from "../models/modelContact.js";


const app = express();

// Post API per ruajtjen e kontaktit
app.post("/addContact", async (req, res) => {
  try {
    const { name, surname, email, comment } = req.body; // Marrja e te dhenave nga frontend-i

    if (!name || !email || !comment || !surname) {
      return res.status(400).json({ success: false, message: "All fields are required!" });
    }
    console.log(req.body)
    const newContact = new modelContact({ name, email, surname,comment });
    await newContact.save();

    res.status(201).json({ success: true, message: "Message saved successfully!", contact: newContact });
  } catch (err) {
    console.error("Error adding contact:", err);
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

export default app;
