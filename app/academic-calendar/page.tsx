import { Calendar, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AcademicCalendar() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#0c2340] text-white py-3 px-4 md:px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="bg-white p-2 rounded-full">
              <GraduationCap className="h-10 w-10 text-[#0c2340]" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">Guru Nanak Dev University</h1>
              <p className="text-sm md:text-base">ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ, ਅੰਮ੍ਰਿਤਸਰ</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="font-semibold">Academic Year 2025-26</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto py-4 px-2">
        <Card className="mb-4 shadow-md max-w-4xl mx-auto">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-center text-xl md:text-2xl text-[#0c2340]">Academic Calendar 2025-26</CardTitle>
            <p className="text-center text-sm text-gray-600 mt-2">
              (For Credit Based System courses being run in the Main Campus, Regional Campuses, GNDU College, Jalandhar
              & ASSM College, Mukandpur)
            </p>
          </CardHeader>
          <CardContent className="pt-2 px-2 md:px-4">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-100">
                    <TableHead className=" font-bold">Sr.No.</TableHead>
                    <TableHead className="w-[500px] font-bold">Description</TableHead>
                    <TableHead className=" font-bold">From</TableHead>
                    <TableHead className="font-bold">To</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Commencement of New Session</TableCell>
                    <TableCell>
                      15-01-2025
                      <br />
                      Wednesday
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Mid Term Examinations for Sem II, IV, VI & VIII</TableCell>
                    <TableCell>
                      06-03-2025
                      <br />
                      Thursday
                    </TableCell>
                    <TableCell>
                      12-03-2025
                      <br />
                      Wednesday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>End Semester Practical&apos;s</TableCell>
                    <TableCell>
                      25-04-2025
                      <br />
                      Friday
                    </TableCell>
                    <TableCell>
                      03-05-2025
                      <br />
                      Saturday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4</TableCell>
                    <TableCell>Major Examinations</TableCell>
                    <TableCell>
                      06-05-2025
                      <br />
                      Tuesday
                    </TableCell>
                    <TableCell>
                      30-05-2025
                      <br />
                      Friday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5</TableCell>
                    <TableCell>Evaluation and Compilation of Results</TableCell>
                    <TableCell>
                      02-06-2025
                      <br />
                      Monday
                    </TableCell>
                    <TableCell>
                      06-06-2025
                      <br />
                      Friday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6</TableCell>
                    <TableCell>Summer Vacations</TableCell>
                    <TableCell>
                      07-06-2025
                      <br />
                      Saturday
                    </TableCell>
                    <TableCell>
                      09-07-2025
                      <br />
                      Wednesday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>7</TableCell>
                    <TableCell>Commencement of New Session</TableCell>
                    <TableCell>
                      10-07-2025
                      <br />
                      Thursday
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>8</TableCell>
                    <TableCell>Mid Term Examinations</TableCell>
                    <TableCell>
                      22-09-2025
                      <br />
                      Monday
                    </TableCell>
                    <TableCell>
                      26-09-2025
                      <br />
                      Friday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9</TableCell>
                    <TableCell>End Semester Practical&apos;s</TableCell>
                    <TableCell>
                      17-11-2025
                      <br />
                      Monday
                    </TableCell>
                    <TableCell>
                      26-11-2025
                      <br />
                      Wednesday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>Major Examinations</TableCell>
                    <TableCell>
                      27-11-2025
                      <br />
                      Thursday
                    </TableCell>
                    <TableCell>
                      17-12-2025
                      <br />
                      Wednesday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11</TableCell>
                    <TableCell>Evaluation and Compilation of Results</TableCell>
                    <TableCell>
                      18-12-2025
                      <br />
                      Thursday
                    </TableCell>
                    <TableCell>
                      26-12-2025
                      <br />
                      Friday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12</TableCell>
                    <TableCell>Winter Vacations</TableCell>
                    <TableCell>
                      27-12-2025
                      <br />
                      Saturday
                    </TableCell>
                    <TableCell>
                      14-01-2026
                      <br />
                      Wednesday
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13</TableCell>
                    <TableCell>Commencement of New Semester</TableCell>
                    <TableCell>
                      15-01-2026
                      <br />
                      Thursday
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <p>
                <strong>Note 1:</strong> List of Gazetted/Restricted Holidays will be observed as per the General Branch
                Circular no. 1730-1829/G dated 23-12-2024.
              </p>
              <p>
                <strong>Note 2:</strong> Academic Calendar of Guru Nanak Dev University for the session 2025-26 for Non
                Credit Based System Courses being run in the Regional Campuses, University/ Constituent Colleges shall
                be the same as circulated by the Controller of Examinations for the Affiliated Colleges of Guru Nanak
                Dev University.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md max-w-4xl mx-auto">
          <CardHeader className="bg-gray-50">
            <CardTitle className="text-center text-lg md:text-xl text-[#0c2340]">Distribution List</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 px-2 md:px-4">
          <p className="mb-2 font-medium">ਉਪਰੋਕਤ ਦਾ ਉਤਾਰਾ ਹੇਠ ਲਿਖਿਆਂ ਨੂੰ ਜਾਣਕਾਰੀ ਅਤੇ ਲੋੜੀਂਦੀ ਕਾਰਵਾਈ ਹਿੱਤ ਭੇਜਿਆ ਜਾਂਦਾ ਹੈ:</p>
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
  <ol className="list-decimal pl-5 space-y-1">
    <li>ਮੁਖੀ ਸਾਹਿਬਾਨ, ਸਮੂਹ ਟੀਚਿੰਗ/ਨਾਨ-ਟੀਚਿੰਗ ਵਿਭਾਗਾਂ ਅਤੇ ਪ੍ਰਬੰਧਕੀ ਦਫਤਰ ਦੀਆਂ ਸ਼ਾਖਾਵਾਂ</li>
    <li>ਐਸੋਸੀਏਟ ਡੀਨ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ ਰਿਜ਼ਨਲ ਕੈਂਪਸ, ਜਲੰਧਰ</li>
    <li>ਐਸੋਸੀਏਟ ਡੀਨ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਿਟੀ ਰਿਜ਼ਨਲ ਕੈਂਪਸ, ਗੁਰਦਾਸਪੁਰ</li>
    <li>ਪ੍ਰਿੰਸੀਪਲ, ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਯੂਨੀਵਰਸਟੀ ਕਾਲਜ, ਜਲੰਧਰ</li>
    <li>ਪ੍ਰਿੰਸੀਪਲ, ਅਮਰਦੀਪ ਸਿੰਘ ਸ਼ੇਰਗਿੱਲ ਮੈਮੋਰੀਅਲ ਕਾਲਜ, ਮੁਕੰਦਪੁਰ (ਨਵਾਂਸ਼ਹਿਰ)</li>
    <li>ਸਕੱਤਰ, ਉਪ-ਕੁਲਪਤੀ ਜੀ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡੀਨ ਵਿਦਿਅਕ ਮਾਮਲੇ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਰਜਿਸਟਰਾਰ ਜੀ</li>
  </ol>

  <ol className="list-decimal pl-5 md:pl-8 space-y-1" start={9}>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡੀਨ ਵਿਦਿਆਰਥੀ ਭਲਾਈ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡੀਨ (ਕਾਲਜ ਵਿਕਾਸ ਕੌਂਸਲ)</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡਾਇਰੈਕਟਰ ਰਿਸਰਚ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡਾਇਰੈਕਟਰ ਸਪੋਰਟਸ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਡਾਇਰੈਕਟਰ ਯੁਵਕ ਭਲਾਈ</li>
    <li>ਨਿਜੀ ਸਹਾਇਕ, ਪ੍ਰੋਫੈਸਰ ਇੰਚਾਰਜ(ਪ੍ਰੀਖਿਆਵਾਂ)</li>
    <li>ਡਿਪਟੀ ਕੰਟ੍ਰੋਲਰ (ਲੋਕਲ ਆਡਿਟ)</li>
    <li>Internal Finance Division</li>
  </ol>
</div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                <p>ਅੰਮ੍ਰਿਤਸਰ</p>
                <p>31-01-2025</p>
              </div>
              <div className="text-right">
                <p>ਸਹਾਇਕ ਰਜਿਸਟਰਾਰ(ਜਨਰਲ)</p>
                <p>ਟਾਬੜੇ ਰਜਿਸਟਰਾਰ</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      
    </div>
  )
}
