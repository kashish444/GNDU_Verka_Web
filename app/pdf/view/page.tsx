'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ViewPDFPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!category) {
      setError("Missing category in URL");
      return;
    }

    // Validate if PDF exists
    fetch(`/api/pdf/stream?category=${category}`).then((res) => {
      if (res.ok) {
        setPdfUrl(`/api/pdf/stream?category=${category}`);
      } else {
        setError("No PDF found. Please ask Admin to upload the latest one.");
      }
    });
  }, [category]);

  if (error) {
    return <p className="text-center text-red-600 mt-10">{error}</p>;
  }

  if (!pdfUrl) {
    return <p className="text-center mt-10">Loading PDF...</p>;
  }

  return (
    <div className="w-full h-screen">
      <iframe src={pdfUrl} className="w-full h-full" />
    </div>
  );
}
