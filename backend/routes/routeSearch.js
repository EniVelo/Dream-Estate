import express from "express";
import Item from "../models/modelItem.js";


const router = express.Router();

// Kerkimi i pronave sipas emrit 
router.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.search;

// Nese searchQuery eshte bosh, kthe të gjitha pronat
if (!searchQuery) {
    const allProperties = await Item.find();
    return res.json(allProperties);
  }

    // Kerkon ne databaze me `$regex` per kerkime fleksibel (case-insensitive)
    const properties = await Item.find({
        $or: [
            { title: { $regex: searchQuery, $options: "i" } }, // Kerko ne titull
            { description: { $regex: searchQuery, $options: "i" } },
            { photo: { $regex: searchQuery, $options: "i" } }, 
            { price: !isNaN(searchQuery) ? Number(searchQuery) : undefined },  
            { squareMeters: !isNaN(searchQuery) ? Number(searchQuery) : undefined },
            { bedroom: !isNaN(searchQuery) ? Number(searchQuery) : undefined },
          ].filter((query) => query !== undefined), // Hiq query-t undefined per te shmangur error-et
        });
      

    res.json(properties);
  } catch (error) {
    console.error("Error searching properties:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
