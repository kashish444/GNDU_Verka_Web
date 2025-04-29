import Image from "next/image";

import Footer from "@/components/ui/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Navbar from "@/components/ui/Navbar";
export default function CampusLifePage() {
  // Sample image data - you can replace with your actual images
  const galleryImages = [
    {
      id: 1,
      imageSrc: "/verka.png",
      title: "Campus Building",
      description:
        "Modern infrastructure with state-of-the-art facilities for students.",
    },
    {
      id: 2,
      imageSrc: "/gallery2.jpg",
      title: "NSS SOCIETY",
      description:
        "Students of NSS Society raising awareness about drugs.",
    },
    {
      id: 3,
      imageSrc: "/gallery3.jpg",
      title: "Red Ribbon Club",
      description:
        "Regular dental checkup being done by Red Ribbon Club.",
    },
    {
      id: 4,
      imageSrc: "/gallery4.jpg",
      title: "National Science Day",
      description:
        "On the day of National Science Day , students made a chart about the career option in Science.",
    },
    {
      id: 5,
      imageSrc: "/sportact.png",
      title: "Sports Activity",
      description:
        "Sports facilities and competitions to promote physical fitness.",
    },
    {
      id: 6,
      imageSrc: "/gallery5.jpg",
      title: "NCC Cadets",
      description:
        "NCC to provide an environment to motivate young Indians to join the armed forces.",
    },
    {
      id: 7,
      imageSrc: "/gallery6.jpg",
      title: "Invited Lectures",
      description:
        "Faculity inviting guest lectures to provide knowledge to students.",
    },
    {
      id: 8,
      imageSrc: "/gallery7.jpg",
      title: "Jashan-e-Commerce",
      description:
        "Jashan organised by college.",
    },
    {
      id: 9,
      imageSrc: "/gallery8.jpg",
      title: "Ardaas Diwas",
      description:
        "Annual Ardas Diwas being celebrated to begin the journey of new academic session.",
    },
    {
      id: 10,
      imageSrc: "/convocation.jpg",
      title: "Convocation",
      description:
        "Convocation of students being done by college.",
    },
    {
      id: 11,
      imageSrc: "/eco club.jpg",
      title: "Eco Club",
      description:
        "Eco Club in the college spreading awareness about the environment.",
    },
    {
      id: 12,
      imageSrc: "/gallery12.jpg",
      title: "Seminar",
      description:
        "Seminar being conducted by honourable professor of college.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Title */}
        <section className="bg-[#0c2340] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Campus Life</h1>
            <p className="mt-2 text-lg">
              Explore the vibrant life at GNDU College Verka-Amritsar
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#0c2340]">
                Life at GNDU College Verka
              </h2>
              <p className="text-gray-700">
                Our campus is a vibrant hub of academic, cultural, and
                recreational activities. Students enjoy a balanced life with
                modern facilities, engaging events, and a supportive community.
                Explore our gallery to get a glimpse of the enriching campus
                experience we offer.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery - Simplified to show all images together */}
        <section className="py-6 bg-gray-50">
          <div className="container mx-auto px-4 mb-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#0c2340]">
              Campus Gallery
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {galleryImages.map((item) => (
                <GalleryItem
                  key={item.id}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
            <Footer />
    </div>
  );
}

// Gallery Item Component
function GalleryItem({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
          <div className="relative h-48">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="relative h-[400px] w-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
