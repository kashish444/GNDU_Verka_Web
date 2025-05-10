"use client";

import { useEffect, useState } from "react";
import PdfUpload from "../components/PdfUpload";
import GalleryUpload from "../components/GalleryUpload";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

type News = {
  id: string;
  title: string;
  description: string;
};

type Announcement = {
  id: string;
  title: string;
};

const AdminComponent = () => {
  const [activeTab, setActiveTab] = useState("news");
  const [news, setNews] = useState<News[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    const unsubscribeNews = onSnapshot(collection(db, "news"), (snapshot) => {
      const newsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as News[];
      setNews(newsData);
    });

    const unsubscribeAnnouncements = onSnapshot(collection(db, "announcements"), (snapshot) => {
      const announcementData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Announcement[];
      setAnnouncements(announcementData);
    });

    return () => {
      unsubscribeNews();
      unsubscribeAnnouncements();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex space-x-4 justify-center mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "news" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("news")}
        >
          News
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "announcements" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("announcements")}
        >
          Announcements
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "uploadPdf" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("uploadPdf")}
        >
          Upload Timetable / Datesheet
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "uploadImages" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("uploadImages")}
        >
          Upload Images
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "news" && (
        <div>
          <h2 className="text-xl font-bold mb-4">News</h2>
          {news.length === 0 ? (
            <p className="text-gray-500">No news to show.</p>
          ) : (
            <ul className="space-y-4">
              {news.map((item) => (
                <li key={item.id} className="p-4 border rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "announcements" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Announcements</h2>
          {announcements.length === 0 ? (
            <p className="text-gray-500">No announcements to show.</p>
          ) : (
            <ul className="space-y-4">
              {announcements.map((item) => (
                <li key={item.id} className="p-4 border rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "uploadPdf" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Upload Timetable / Datesheet</h2>
          <PdfUpload />
        </div>
      )}

      {activeTab === "uploadImages" && (
        <div>
          <h2 className="text-xl font-bold mb-4">Upload Images to Gallery</h2>
          <GalleryUpload />
        </div>
      )}
    </div>
  );
};

export default AdminComponent;
