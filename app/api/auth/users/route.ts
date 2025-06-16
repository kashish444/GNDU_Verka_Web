import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const user = await User.findById(id);
    if (!user?.admin) {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }

    const users = await User.find();

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const { firstname, lastname, email, password, id } = await request.json();

  if (!firstname || !lastname || !email || !password || !id) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const user = await User.findById(id);
    if (!user?.admin) {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await User.create({
      firstname,
      lastname,
      email,
      password: passwordHash,
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const { id, objectId } = await request.json();

  if (!id || !objectId) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const user = await User.findById(id);
    if (!user?.admin) {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }

    await User.findByIdAndDelete(objectId);

    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  const { id, objectId, firstname, lastname, email, password, admin } =
    await request.json();

  if (!id || !objectId || !firstname || !email) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const user = await User.findById(id);
    if (!user?.admin) {
      return NextResponse.json(
        { message: "You are not authorized to access this resource" },
        { status: 401 }
      );
    }

    const userToUpdate = await User.findById(objectId);
    if (!userToUpdate) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    userToUpdate.firstname = firstname;
    userToUpdate.lastname = lastname;
    userToUpdate.email = email;
    userToUpdate.admin = admin;

    if (password) {
      const passwordHash = await bcrypt.hash(password, 10);
      userToUpdate.password = passwordHash;
    }

    await userToUpdate.save();

    return NextResponse.json(
      { message: "User updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
