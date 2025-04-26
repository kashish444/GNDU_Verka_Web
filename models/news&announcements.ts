import mongoose from "mongoose";

const newsAndAnnouncements = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: false,
    },
    linkName: {
      type: String,
      required: false,
      default: "Learn more",
    },
    type: {
      type: String,
      required: true,
      enum: ["news", "announcement"],
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const NewsAndAnnouncements =
  mongoose.models.newsAndAnnouncements ||
  mongoose.model("newsAndAnnouncements", newsAndAnnouncements);
export default NewsAndAnnouncements;
