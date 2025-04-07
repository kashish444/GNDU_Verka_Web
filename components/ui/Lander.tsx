import React from "react";
import Image from "next/image";

export default function Lander({
  image,
  heading,
  description,
  cover,
}: {
  image: string;
  heading: string;
  description: string;
  cover?: string;
}) {
  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden">
      <Image
        src={`/${image}`}
        alt="University Campus"
        fill
        className="object-cover"
        style={{ objectPosition: cover }}
        priority
      />
      <div className="absolute inset-0 bg-black/40 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{heading}</h1>
            <p className="text-lg md:text-xl mb-6">{description}</p>
            <div className="flex flex-wrap gap-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
