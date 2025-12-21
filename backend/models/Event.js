import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    smallDescription: {
      type: String,
      required: true,
    },

    // ✅ images can be 1, 2, 5, 10 — NO LIMIT
    image: [
      {
        url: {
          type: String,
          required: true,
        },
        fileName: {
          type: String,
        },
      },
    ],

    date: {
      type: String,
      required: true,
    },

    optionDate: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

// ✅ Always send _id as string to frontend
eventSchema.set("toJSON", {
  transform: (_, ret) => {
    ret._id = ret._id.toString();
    return ret;
  },
});

// ✅ Correct model naming (important)
const Event = mongoose.model("events", eventSchema);

export default Event;
