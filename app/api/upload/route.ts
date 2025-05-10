import { NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import Pdf from "@/models/Pdf";

export async function POST(req: Request) {
  await connectDb();

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const category = formData.get("category");
  const title = formData.get("title");

  const buffer = Buffer.from(await file.arrayBuffer());

  const pdf = new Pdf({
    title,
    category,
    file: {
      data: buffer,
      contentType: file.type,
    },
  });

  await pdf.save();
  return NextResponse.json({ message: "PDF uploaded successfully" });
}
