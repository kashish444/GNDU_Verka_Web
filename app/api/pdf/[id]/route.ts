// app/api/pdf/route.ts

import { NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import Pdf from "@/models/Pdf";

export async function POST(req: Request) {
  await connectDb();
  const formData = await req.formData();

  const file = formData.get("file") as File;
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;

  if (!file || !title || !category) {
    return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const result = await Pdf.create({
    title,
    category,
    file: {
      data: buffer,
      contentType: file.type,
    },
  });

  return NextResponse.json({ message: "PDF uploaded", id: result._id }, { status: 201 });
}
