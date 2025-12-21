import express from "express";
import mongoose from "mongoose";
import Event from "../models/Event.js";

const router = express.Router();

// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET event by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // 🔒 validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID" });
    }

    const event = await Event.findOne({
      _id: new mongoose.Types.ObjectId(id),
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
