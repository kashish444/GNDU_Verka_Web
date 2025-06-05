import connectDb from "@/lib/connectDb";
import Gallery from "@/models/Gallery"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDb();
    const body = await req.json();
    const { title, description, imageUrl, tags } = body;

    if (!title || !description || !imageUrl) {
      return NextResponse.json({ success: false, message: "Missing fields" });
    }

    const newEntry = new Gallery({
      title,
      description,
      imageUrl,
      tags,
    });

    await newEntry.save();

    return NextResponse.json({ success: true, message: "Gallery item saved" });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message });
  }
}
