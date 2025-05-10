import React, { useState, useRef } from "react";

const PdfUpload = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null); // for clearing file visually

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("file", file);

    setIsLoading(true);

    try {
      const res = await fetch("/api/pdf/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        setMessage(`PDF uploaded successfully! ID: ${data.id}`);
        // Reset fields
        setTitle("");
        setCategory("");
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        setIsSuccess(false);
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Error uploading PDF.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Upload PDF Document</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter PDF title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select category</option>
            <option value="timetable">Time Table</option>
            <option value="datesheet">Date Sheet</option>
          </select>
        </div>

        {/* File Input */}
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Upload PDF</label>
          <input
            type="file"
            name="file"
            ref={fileInputRef}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            accept="application/pdf"
            required
            className="w-full bg-white px-4 py-2 border border-gray-300 rounded-lg file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          disabled={isLoading}
        >
          {isLoading ? "Uploading..." : "Upload PDF"}
        </button>

        {/* Message */}
        {message && (
          <div className={`mt-4 p-4 ${isSuccess ? "bg-green-100" : "bg-red-100"} text-center`}>
            <p className={`${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default PdfUpload;
