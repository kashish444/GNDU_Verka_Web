"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    department: string;
  };
}

export default function AdminComponent({ user }: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.get("api/auth/logout");
    if (response.status !== 200) {
      console.log("error logging out");
    }
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center m-auto">
      <div className="flex">
        <p className="flex text-4xl">Welcome</p>
        <p className="flex text-4xl font-bold pl-2">
          {user.firstname + " " + (user.lastname)}
        </p>
      </div>

      <p
        className="underline text-violet-600 cursor-pointer"
        onClick={() => handleLogout()}
      >
        Logout
      </p>
    </div>
  );
}
