import connectDb from "@/lib/connectDb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    await connectDb();

    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide email and password" },
        {
          status: 400,
        }
      );
    }

    const fixedEmail = email.toLowerCase().trim();

    const user = await User.findOne({
      $or: [{ email: fixedEmail }, { employeeId: fixedEmail }],
    });

    if (!user) {
      return NextResponse.json(
        { message: "Either email or password is incorrect!" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Either email or password is incorrect!" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        employeeId: user.employeeId,
        department: user.department || "",
      },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    (await cookies()).set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Failed to login:", error);
    return NextResponse.json("Something went wrong!", { status: 500 });
    // logic hai abhi
  }
}
