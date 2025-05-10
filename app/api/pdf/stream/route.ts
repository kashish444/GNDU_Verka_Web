import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import mongoose from "mongoose";

const PdfSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    file: {
      data: Buffer,
      contentType: String,
    },
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "pdfs" } // your actual collection name
);

const PdfModel = mongoose.models.Pdf || mongoose.model("Pdf", PdfSchema);

export async function GET(req: NextRequest) {
  await connectDb();

  const category = req.nextUrl.searchParams.get("category");
  if (!category) {
    return new NextResponse("Missing category", { status: 400 });
  }

  const pdfDoc = await PdfModel.findOne({ category })
    .sort({ uploadedAt: -1 }) // 🔥 Get the latest
    .lean();

  if (!pdfDoc || !pdfDoc.file?.data) {
    return new NextResponse("PDF not found", { status: 404 });
  }

  return new NextResponse(pdfDoc.file.data.buffer, {
    headers: {
      "Content-Type": pdfDoc.file.contentType || "application/pdf",
      "Content-Disposition": `inline; filename="${pdfDoc.title || "file"}.pdf"`,
    },
  });
}
