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
      type: Date,
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

eventSchema.set("toJSON", {
  transform: (_, ret) => {
    ret._id = ret._id.toString();
    return ret;
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
