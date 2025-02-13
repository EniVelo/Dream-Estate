import express from "express"
import mongoose from "mongoose";
import cors from "cors";
import session from "express-session";
import routeContact from "./routes/routeContact.js";
import routeItem from "./routes/routeItem.js";
import path from 'path';
import { fileURLToPath } from 'url';




let app = express();
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); 
// Sherbimi i folderit 'images' nga backend-i
app.use("/images", express.static(path.join(__dirname, "images")));

// Konfigurimi i CORS per frontend ne portin 3000
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    exposedHeaders: ["set-cookie"],
  })
);

// Konfigurimi i sesioneve
app.use(
  session({
    secret: "This will be secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 90 * 60 * 24 },
  })
);

// Lejon dergimin e te dhenave ne format JSON
app.use(express.json({ limit: "1000mb", extended: true }));

// Lidhja me MongoDB

mongoose.connect('mongodb+srv://eniveloeni:enivelo1771!@cluster0.tv9x7.mongodb.net/dream_estate')
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

// Perdorimi i rrugeve te tjera
app.use(routeContact);
app.use(routeItem);

//  endpoint i thjeshte testimi
app.use("/", (req, res) => {
  res.send("Hello");
});

// Aktivizimi i serverit ne portin 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


