import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookie = await cookies();
    cookie.set({
      name: "token",
      value: "",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 0, // Expire the cookie
    });

    return NextResponse.json({ message: "Logged out!" }, { status: 200 });
  } catch (error) {
    console.log("Error during logout:", error);
    return NextResponse.json(
      { message: "failde logging out!" },
      { status: 500 }
    );
  }
}
