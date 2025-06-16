import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import bcrypt from "bcrypt";

export default function Users({ id }: { id: string }) {
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get(`/api/auth/users?id=${id}`),
  });

  const [errorMessage, setErrorMessage] = useState<String | null>(null);
  const [successMessage, setSuccessMessage] = useState<String | null>(null);

  const [editing, setEditing] = useState("");

  const handleAddUser = async (formData: FormData) => {
    setErrorMessage(null);
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");

    const response = await axios.post("/api/auth/users", {
      id,
      firstname,
      lastname,
      email,
      password,
    });

    if (response.status !== 200) {
      setErrorMessage(response.data.message);
    }

    if (response.status === 200) {
      setErrorMessage(null);
      setSuccessMessage("User created successfully");
      formData.delete("firstname");
      formData.delete("lastname");
      formData.delete("email");
      formData.delete("password");
    }

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  const handleDeleteUser = async (id: string, objectId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirm) return;

    const response = await axios.delete(`/api/auth/users`, {
      data: {
        id,
        objectId: objectId,
      },
    });

    if (response.status === 200) {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    }
  };

  const handleEditUser = async (formData: FormData, objectId: string) => {
    const firstname = formData.get("firstname");
    const lastname = formData.get("lastname");
    const email = formData.get("email");
    const password = formData.get("password");
    const admin = formData.get("admin");

    const response = await axios.put(`/api/auth/users`, {
      id,
      objectId,
      firstname,
      lastname,
      email,
      password,
      admin: admin === "on" ? true : false,
    });

    if (response.status === 200) {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setEditing("");
    }
  };

  return (
    <div className="flex flex-col my-10 w-full bg-black/5 rounded-xl p-10">
      <h2 className="text-3xl font-bold text-black mb-4 ">Manage Users</h2>
      <div className="flex flex-col gap-5">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && data.data.length === 0 && <p>No users found</p>}
        <form
          action={handleAddUser}
          className="flex flex-col justify-center bg-white p-6 rounded-lg w-full"
        >
          <div className="flex flex-row gap-2 justify-center">
            <input
              type="text"
              required
              name="firstname"
              placeholder="First Name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
            />
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
            />
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-300"
            >
              Add user
            </button>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center mt-2">
              {errorMessage}
            </p>
          )}
          {successMessage && (
            <p className="text-green-500 text-sm text-center mt-2">
              {successMessage}
            </p>
          )}
        </form>
        {data?.data.map((user: any) => (
          <div
            key={user._id}
            className="flex flex-row bg-white rounded-xl p-10"
          >
            {editing !== user._id && (
              <div>
                <h3 className="text-2xl font-bold text-black items-center">
                  {user.firstname} {user.lastname}{" "}
                  <span className="text-sm text-gray-500">
                    {user.admin ? "Admin" : "User"}
                  </span>
                </h3>

                <p className="text-lg text-black ">{user.email}</p>
                {/* <p className="text-lg text-black ">{user.password}</p> */}
                {/* <p className="text-lg text-black ">{user.department}</p> */}
              </div>
            )}
            {editing === user._id && (
              <form
                action={(e) => handleEditUser(e, user._id)}
                className="flex flex-col gap-2"
              >
                <div className="flex flex-row gap-2">
                  <input
                    type="text"
                    required
                    name="firstname"
                    defaultValue={user.firstname}
                    placeholder="First Name"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                  <input
                    type="text"
                    name="lastname"
                    defaultValue={user.lastname}
                    placeholder="Last Name"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="email"
                    required
                    name="email"
                    defaultValue={user.email}
                    placeholder="Email"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="password"
                    name="password"
                    placeholder="New Password"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                </div>
                <div className="flex flex-row gap-2">
                  <input
                    type="checkbox"
                    name="admin"
                    defaultChecked={user.admin}
                    placeholder="Admin"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black/50"
                  />
                  <label htmlFor="admin">Admin</label>
                </div>
                <div className="flex flex-row gap-2">
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-300"
                  >
                    Save
                  </button>
                </div>
              </form>
            )}

            <div className="ml-auto flex gap-5 ">
              <button
                className="text-blue-600 hover:underline"
                onClick={() => setEditing(editing === user._id ? "" : user._id)}
              >
                Edit
              </button>
              <button
                className="text-red-600 hover:underline"
                onClick={() => handleDeleteUser(id, user._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
