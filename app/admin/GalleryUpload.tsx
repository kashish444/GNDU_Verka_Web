"use client";
import React, { useState } from "react";

const GalleryUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    setIsUploading(true);
    try {
      const res = await fetch("/api/gallery/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Image uploaded successfully!");
      } else {
        setMessage(data.message || "Upload failed.");
      }
    } catch (err) {
      setMessage("Something went wrong.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Upload Gallery Image</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input name="title" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea name="description" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input type="file" name="image" accept="image/*" required className="w-full" />
        </div>
        <button type="submit" disabled={isUploading} className="bg-blue-600 text-white px-4 py-2 rounded">
          {isUploading ? "Uploading..." : "Upload"}
        </button>
        {message && <p className="text-center mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default GalleryUpload;
