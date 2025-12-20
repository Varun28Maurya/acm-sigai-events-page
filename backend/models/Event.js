import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    smallDescription: { type: String, required: true },
    image: {
      url: String,
      fileName: String,
    },
    date: { type: String, required: true },
    optionDate: Number,
  },
  { timestamps: true }
);

// convert ObjectId → string
eventSchema.set("toJSON", {
  transform: (_, ret) => {
    ret._id = ret._id.toString();
    return ret;
  },
});

// ✅ model name = Event
// ✅ collection = events
const Event = mongoose.model("profiles", eventSchema);

export default Event;
