import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Data {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
  linkText?: string;
  link?: string;
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

export default function NewsAndAnnouncements() {
  const {
    data: news,
    isLoading: newsLoading,
    error: newsError,
  } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await axios.get("/api/news&announcements?type=news&limit=5");
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
        "/api/news&announcements?type=announcements&limit=5"
      );
      if (res.status !== 200) {
        throw new Error("Network response was not ok");
      }
      return res.data;
    },
  });

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#0c2340]">
          News & Announcements
        </h2>

        <Tabs defaultValue="news" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="announcements">Announcements</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="space-y-6">
              {news && news.length == 0 && (
                <div className="text-center py-4">No announcements yet!</div>
              )}
              {newsLoading && (
                <div className="text-center py-4">Loading...</div>
              )}
              {newsError && (
                <div className="text-center py-4 text-red-500">
                  Error fetching news!
                </div>
              )}
              {news &&
                news.map((data: Data, index: number) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(data.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                      <p className="text-gray-600 mb-4">{data.description}</p>
                      <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScVHvIC74AktYR4icNnishdy9Kt3Esl2ZNw2oJ1-dVrMVdfpA/viewform?usp=header"
                        target="_blank"
                        className="text-amber-600 hover:text-amber-700 flex items-center"
                      >
                        {data.linkText ? data.linkText : "Learn More"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}

              {news && news.length == 5 && (
                <div className="text-center mt-8">
                  <Button variant="outline">View All News</Button>
                </div>
              )}

              {/* <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">May 15, 2025</div>
                  <h3 className="text-xl font-bold mb-2">
                    Registration Open for New Admission
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Applications are now open for new admissions. Complete the
                    registration form to secure your place for the upcoming
                    academic year.
                  </p>
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScVHvIC74AktYR4icNnishdy9Kt3Esl2ZNw2oJ1-dVrMVdfpA/viewform?usp=header"
                    target="_blank"
                    className="text-amber-600 hover:text-amber-700 flex items-center"
                  >
                    Registration Form <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </CardContent>
              </Card> */}
            </div>
          </TabsContent>

          <TabsContent value="announcements">
            <div className="space-y-4">
              {announcements && announcements.length == 0 && (
                <div className="text-center py-4">No announcements yet!</div>
              )}
              {announcementsLoading && (
                <div className="text-center py-4">Loading...</div>
              )}
              {announcementsError && (
                <div className="text-center py-4 text-red-500">
                  Error fetching news!
                </div>
              )}

              {announcements &&
                announcements.map((data: Data, index: number) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {data.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                      <p className="text-gray-600 mb-4">{data.description}</p>
                      <Link
                        href={data.link || "#"}
                        target="_blank"
                        className="text-amber-600 hover:text-amber-700 flex items-center"
                      >
                        {data.linkText ? data.linkText : "Learn More"}
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}

              {announcements && announcements.length == 5 && (
                <div className="text-center mt-8">
                  <Button variant="outline">View All News</Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
