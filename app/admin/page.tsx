"use server";

import React from "react";
import { Decoded } from "@/lib/decodeUser";
import AdminComponent from "./AdminComponent";

export default async function page() {
  const user = await Decoded();

  if (!user) {
    return (
      <div className="flex justify-center items-center m-auto">
        Not Authorized!
      </div>
    );
  }

  return (
    <>
      <AdminComponent user={user} />
    </>
  );
}
