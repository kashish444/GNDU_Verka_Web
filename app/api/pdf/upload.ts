// app/api/pdf/upload.ts

import { NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import Pdf from "@/models/Pdf";

export async function POST(req: Request) {
  try {
    // Connect to the database
    await connectDb();

    // Check for multipart/form-data content type
    const contentType = req.headers.get("content-type");
    if (!contentType || !contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { message: "Content-Type must be multipart/form-data" },
        { status: 400 }
      );
    }

    // Parse the form data
    const formData = await req.formData();
    
    // Get the file from form data
    const file = formData.get("file");
    if (!file) {
      return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
    }

    // Get title and category from form data
    const title = formData.get("title");
    const category = formData.get("category");

    // Create and save PDF record in the database
    const newPdf = await Pdf.create({
      title: title?.toString() || "Untitled",
      category: category?.toString() || "Uncategorized",
      file: {
        data: file.buffer,  // Store the file as a buffer
        contentType: file.type, // Store the file content type (e.g., application/pdf)
      },
    });

    // Return a success response with the new PDF record ID
    return NextResponse.json(
      { message: "PDF record created successfully", id: newPdf._id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error uploading PDF:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
