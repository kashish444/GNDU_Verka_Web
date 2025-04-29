import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card"; // adjust if needed

interface LibraryProps {
  rules: string[];
}

const Library: React.FC<LibraryProps> = ({ rules }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleRules = showAll ? rules : rules.slice(0, 4);

  return (
    <section className="py-4">
      <div className="container mx-auto px-4 w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-[#0c2340]">
          Library Rules
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {visibleRules.map((rule, index) => (
                  <li className="flex items-center" key={index}>
                    <div className="bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{rule}</p>
                  </li>
                ))}
              </ul>

              {rules.length > 4 && (
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {showAll ? "Show Less" : "Read More"}
                  </button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Library;
