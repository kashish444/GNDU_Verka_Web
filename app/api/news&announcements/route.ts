import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/connectDb";
import NewsAndAnnouncement from "@/models/news&announcements";

export async function POST(req: NextRequest) {
  const { title, description, link, linkName, type } = await req.json();

  if (!title || !description || !type) {
    return new Response(
      JSON.stringify({ message: "Please provide all required fields" }),
      { status: 400 }
    );
  }

  if (type !== "news" && type !== "announcement") {
    return new Response(
      JSON.stringify({
        message: "Type must be either 'news' or 'announcement'",
      }),
      { status: 400 }
    );
  }

  try {
    await connectDb();

    const create = await NewsAndAnnouncement.create({
      title,
      description,
      link: link || null,
      linkName: linkName || null,
      type,
    });

    if (!create) {
      return NextResponse.json(
        { message: "Failed to create news or announcement" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "News or announcement created successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating news or announcement:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const { id, title, description, link, linkName, type } = await req.json();

  if (!id) {
    return NextResponse.json(
      { message: "Please provide an ID" },
      { status: 400 }
    );
  }

  try {
    await connectDb();

    const newDate = new Date();
    const updated = await NewsAndAnnouncement.findByIdAndUpdate(
      id,
      { title, description, link, linkName, type, date: newDate },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json(
        { message: "Failed to update news or announcement" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "News or announcement updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating news or announcement:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const type = req.nextUrl.searchParams.get("type");
    const limit = req.nextUrl.searchParams.get("limit");

    if (!type) {
      return NextResponse.json(
        { message: "Type is required" },
        { status: 400 }
      );
    }

    await connectDb();

    const newsAndAnnouncements = await NewsAndAnnouncement.find({
      type,
    })
      .sort({ date: -1 })
      .limit(limit ? parseInt(limit) : 5);

    return NextResponse.json(newsAndAnnouncements, { status: 200 });
  } catch (error) {
    console.error("Error fetching news and announcements:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "Please provide an ID" }), {
      status: 400,
    });
  }

  try {
    await connectDb();

    const deleted = await NewsAndAnnouncement.findByIdAndDelete(id);

    if (!deleted) {
      return new Response(
        JSON.stringify({ message: "Failed to delete news or announcement" }),
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "News or announcement deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting news or announcement:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
