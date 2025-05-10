import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema({
  title: String, // e.g., "Time Table - MCA"
  category: String, // e.g., "timetable" or "datesheet"
  file: {
    data: Buffer,
    contentType: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Pdf || mongoose.model("Pdf", PdfSchema);
