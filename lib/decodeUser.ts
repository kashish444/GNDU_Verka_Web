import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

// Define the user type
interface User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  department: string;
}

// Decode the JWT token and return the user object
export async function Decoded() {
  const cookie = await cookies();
  const token = cookie.get("token");

  if (!token) {
    return null;
  }

  try {
    const decoded = (await jwt.verify(
      token.value,
      process.env.JWT_SECRET as string
    )) as User;

    return decoded;
  } catch (error) {
    console.log("Invalid token: ", error);
    return null;
  }
}