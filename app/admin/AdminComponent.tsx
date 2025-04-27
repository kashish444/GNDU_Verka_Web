/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
interface Props {
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    department: string;
  };
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (!isNaN(date.getTime())) {
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  }
  return dateString; // Return the original string if invalid
}

export default function AdminComponent({ user }: Props) {
  const [editing, setEditing] = useState({
    editing: false,
    type: "",
    what: "Edit",
    loading: false,
    error: "",
    id: "",
  });
  const [data, setData] = useState({
    title: "",
    description: "",
    date: new Date().toISOString(),
    type: "",
    linkName: "",
    link: "",
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await axios.get("api/auth/logout");
    if (response.status !== 200) {
      console.log("error logging out");
    }
    router.push("/");
  };

  const {
    data: news,
    isLoading: newsLoading,
    error: newsError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get("/api/news&announcements?type=news&limit=0");
      if (res.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return res.data;
    },
  });

  const {
    data: announcements,
    isLoading: announcementsLoading,
    error: announcementsError,
  } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axios.get(
        "/api/news&announcements?type=announcement&limit=0"
      );
      if (res.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return res.data;
    },
  });

  const handleDelete = async (id: string) => {
    // confirm
    const confirmDelete = confirm(
      "Are you sure you want to delete? This action cannot be undone."
    );
    if (!confirmDelete) {
      return;
    }

    const response = await axios.delete(`/api/news&announcements`, {
      data: { id },
    });
    if (response.status !== 200) {
      console.log("error deleting news");
    } else {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
    }
  };

  const handleEdit = async () => {
    setEditing({ ...editing, loading: true, error: "" });

    try {
      if (editing.what === "Add") {
        const response = await axios.post(`/api/news&announcements`, {
          title: data.title,
          description: data.description,
          type: editing.type.toLowerCase(),
          linkName: data.linkName,
          link: data.link,
        });
        if (response.status !== 200) {
          console.log("error adding news");
          setEditing({ ...editing, loading: false });
        } else {
          queryClient.invalidateQueries({ queryKey: ["news"] });
          queryClient.invalidateQueries({ queryKey: ["announcements"] });
          setEditing({
            ...editing,
            editing: false,
            type: "",
            what: "Edit",
            loading: false,
            error: "",
          });
        }
      }
      if (editing.what === "Edit") {
        const response = await axios.patch(`/api/news&announcements`, {
          id: editing.id,
          title: data.title,
          description: data.description,
          type: editing.type.toLowerCase(),
          linkName: data.linkName,
          link: data.link,
        });
        if (response.status !== 200) {
          console.log("error adding news");
          setEditing({ ...editing, loading: false });
        } else {
          queryClient.invalidateQueries({ queryKey: ["news"] });
          queryClient.invalidateQueries({ queryKey: ["announcements"] });
          setEditing({
            ...editing,
            editing: false,
            type: "",
            what: "Edit",
            loading: false,
            error: response.data.message,
          });
        }
      }
    } catch (error) {
      console.log("error adding news", error);
      setEditing({
        ...editing,
        loading: false,
        error: "Error adding! :(",
      });
    }
  };

  return (
    <>
      {/* navbar div */}
      <div className="flex justify-between items-center bg-black text-white px-10 py-4">
        <a className="text-2xl font-bold" href="/admin">
          Verka Dashboard
        </a>
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          {/* <a href="/admin/users" className="hover:text-gray-400">
            Users
          </a> */}
          <p className="hover:text-gray-400 cursor-pointer" onClick={() => handleLogout()}>
            Logout
          </p>
        </nav>
      </div>

      <div className="flex flex-col w-full px-10">
        {/* Welcome user */}
        <div className="flex w-fit  mt-10">
          <p className="flex text-4xl">Welcome</p>
          <p className="flex text-4xl font-bold pl-2">
            {user.firstname + " " + user.lastname}
          </p>
        </div>

        <div className="flex flex-col my-10 w-full bg-black/5 rounded-xl p-10">
          <h2 className="text-3xl font-bold text-black mb-4">
            News & Announcements
          </h2>

          <div className=" flex-col grid grid-cols-2 gap-5">
            <div>
              <h2 className="text-xl font-semibold text-black mb-2">News</h2>
              {/* add button */}
              <button
                className="bg-black text-white px-4 py-2 rounded-lg mb-4 transition-all duration-300"
                onClick={() =>
                  setEditing({
                    ...editing,
                    editing: true,
                    type: "News",
                    what: "Add",
                  })
                }
              >
                Add News
              </button>

              {newsLoading && <p>Loading...</p>}
              {newsError && (
                <p className="text-red-500">Error fetching News!</p>
              )}

              {news && news.length === 0 && (
                <p className="text-gray-500">No News added!</p>
              )}
              {news &&
                news.map((item: any) => (
                  <div
                    key={item._id}
                    className="bg-white p-5 relative rounded-lg w-full mb-5 last:mb-0"
                  >
                    <p className="text-xs">{formatDate(item.date)}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-base">
                      {(() => {
                        const parts = item.description.split(
                          /(<br>|<b>|<\/b>|<i>|<\/i>)/g
                        );
                        let bold = false;
                        let italic = false;

                        return parts.map((part: string, index: number) => {
                          if (part === "<br>") {
                            return <br key={index} />;
                          } else if (part === "<b>") {
                            bold = true;
                            return null;
                          } else if (part === "</b>") {
                            bold = false;
                            return null;
                          } else if (part === "<i>") {
                            italic = true;
                            return null;
                          } else if (part === "</i>") {
                            italic = false;
                            return null;
                          } else {
                            let content: React.ReactNode = part;
                            if (bold) {
                              content = <strong key={index}>{content}</strong>;
                            }
                            if (italic) {
                              content = <em key={index}>{content}</em>;
                            }
                            return (
                              <React.Fragment key={index}>
                                {content}
                              </React.Fragment>
                            );
                          }
                        });
                      })()}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-yellow-600 text-sm hover:underline"
                      >
                        {item.linkName || "Know More >"}
                      </a>
                    )}

                    <p
                      className="mt-3 cursor-pointer hover:underline"
                      onClick={() => {
                        setEditing({
                          ...editing,
                          editing: true,
                          type: "News",
                          what: "Edit",
                          id: item._id,
                        });
                        setData({
                          title: item.title,
                          description: item.description,
                          date: item.date,
                          type: "Announcement",
                          link: item.link,
                          linkName: item.linkName,
                        });
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="text-red-600 cursor-pointer hover:underline"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </p>
                  </div>
                ))}
            </div>

            <div key={"announcements"}>
              <h2 className="text-xl font-semibold text-black mb-2">
                Announcements
              </h2>

              <button
                className="bg-black text-white px-4 py-2 rounded-lg mb-4 transition-all duration-300"
                onClick={() =>
                  setEditing({
                    ...editing,
                    editing: true,
                    type: "Announcement",
                    what: "Add",
                  })
                }
              >
                Add Announcement
              </button>
              {announcementsLoading && <p>Loading...</p>}
              {announcementsError && (
                <p className="text-red-500">Error fetching announcements!</p>
              )}

              {announcements && announcements.length === 0 && (
                <p className="text-gray-500">No announcements added!</p>
              )}

              {announcements &&
                announcements.map((item: any) => (
                  <div
                    key={item._id}
                    className="bg-white p-5 relative rounded-lg w-full mb-5 last:mb-0"
                  >
                    <p className="text-xs">{formatDate(item.date)}</p>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-base">
                      {(() => {
                        const parts = item.description.split(
                          /(<br>|<b>|<\/b>|<i>|<\/i>)/g
                        );
                        let bold = false;
                        let italic = false;

                        return parts.map((part: string, index: number) => {
                          if (part === "<br>") {
                            return <br key={index} />;
                          } else if (part === "<b>") {
                            bold = true;
                            return null;
                          } else if (part === "</b>") {
                            bold = false;
                            return null;
                          } else if (part === "<i>") {
                            italic = true;
                            return null;
                          } else if (part === "</i>") {
                            italic = false;
                            return null;
                          } else {
                            let content: React.ReactNode = part;
                            if (bold) {
                              content = <strong key={index}>{content}</strong>;
                            }
                            if (italic) {
                              content = <em key={index}>{content}</em>;
                            }
                            return (
                              <React.Fragment key={index}>
                                {content}
                              </React.Fragment>
                            );
                          }
                        });
                      })()}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        className="text-yellow-600 text-sm hover:underline"
                      >
                        {item.linkName || "Know More >"}
                      </a>
                    )}

                    <p
                      className="mt-3 cursor-pointer hover:underline"
                      onClick={() => {
                        setEditing({
                          ...editing,
                          editing: true,
                          type: "Announcement",
                          what: "Edit",
                          id: item._id,
                        });
                        setData({
                          title: item.title,
                          description: item.description,
                          date: item.date,
                          type: "Announcement",
                          linkName: item.linkName,
                          link: item.link,
                        });
                      }}
                    >
                      Edit
                    </p>
                    <p
                      className="text-red-600 cursor-pointer hover:underline"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* edit page */}
      {editing.editing && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-10"
            onClick={() => {
              setEditing({
                ...editing,
                editing: false,
                type: "",
                what: "Edit",
              });
              setData({
                title: "",
                description: "",
                date: new Date().toISOString(),
                type: "",
                linkName: "",
                link: "",
              });
            }}
          ></div>

          <div className="absolute w-fit h-fit bg-white rounded-xl z-10 top-0 bottom-0 left-0 right-0 m-auto flex justify-start items-center px-10">
            <div className="w-[40rem] h-[35rem] flex justify-center items-center rounded-lg overflow-hidden group">
              <div className="w-full h-full bg-white rounded-lg shadow-lg p-10 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-bold mb-4">
                  {editing.what + " " + editing.type}
                </h2>
                <form
                  className="w-full flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleEdit();
                  }}
                >
                  <input
                    type="text"
                    placeholder="Title"
                    value={data.title || ""}
                    onChange={(e) =>
                      setData({ ...data, title: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <textarea
                    placeholder="Description"
                    value={data.description || ""}
                    onChange={(e) =>
                      setData({ ...data, description: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg p-2 w-full h-24"
                  ></textarea>

                  <input
                    type="text"
                    value={data.link || ""}
                    onChange={(e) => setData({ ...data, link: e.target.value })}
                    placeholder="Link (optional)"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <input
                    type="text"
                    value={data.linkName || ""}
                    onChange={(e) =>
                      setData({ ...data, linkName: e.target.value })
                    }
                    placeholder="Link name"
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                  <button
                    type="submit"
                    className="bg-black text-white px-4 py-2 rounded-lg mt-4 transition-all duration-300"
                  >
                    {editing.loading ? "Loading..." : editing.what}
                  </button>
                  {editing.error && (
                    <p className="text-red-500 text-center">{editing.error}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
