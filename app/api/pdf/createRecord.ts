// app/api/pdf/createRecord.ts

import { NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import Pdf from "@/models/Pdf";
import fs from "fs"; // You can use fs to load a sample file from your local system for testing

export async function GET() {
  try {
    await connectDb(); // Ensure MongoDB connection

    // Sample data to insert a PDF record
    const sampleFilePath = "path_to_your_sample_pdf_file.pdf"; // Local file path

    // Read the file and convert it to a Buffer
    const fileBuffer = fs.readFileSync(sampleFilePath);

    // Create a new PDF record
    const newPdf = await Pdf.create({
      title: "Sample PDF Document",  // Title of the PDF
      category: "timetable",         // Category like "timetable", "datesheet"
      file: {
        data: fileBuffer,           // PDF file content as a Buffer
        contentType: "application/pdf", // PDF content type
      },
    });

    // Return success response with the inserted record ID
    return NextResponse.json(
      { message: "PDF record created successfully", id: newPdf._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
