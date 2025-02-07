import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Search } from "lucide-react";

const softwareList = [
  { type: "Security", name: "Bitdefender", purpose: "Antivirus", license: "Paid", link: "https://bitdefender.com", remarks: "Recommended" },
  { type: "Development", name: "VS Code", purpose: "Code Editor", license: "Free", link: "https://code.visualstudio.com", remarks: "Popular Choice" },
  { type: "Productivity", name: "Slack", purpose: "Communication", license: "Freemium", link: "https://slack.com", remarks: "Used for team collaboration" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [filteredSoftware, setFilteredSoftware] = useState(softwareList);

  useEffect(() => {
    const results = softwareList.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSoftware(results);
  }, [search]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Allowed Software List</h1>
      <div className="relative mb-6">
        <Search className="absolute left-3 top-3 text-gray-500" size={20} />
        <Input
          className="pl-10 w-full border rounded-lg p-2"
          placeholder="Search by name or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Purpose</TableHead>
                <TableHead>License</TableHead>
                <TableHead>Link</TableHead>
                <TableHead>Remarks</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSoftware.map((software, index) => (
                <TableRow key={index}>
                  <TableCell>{software.type}</TableCell>
                  <TableCell className="font-medium">{software.name}</TableCell>
                  <TableCell>{software.purpose}</TableCell>
                  <TableCell>{software.license}</TableCell>
                  <TableCell>
                    <a href={software.link} target="_blank" className="text-blue-600 hover:underline">
                      Visit
                    </a>
                  </TableCell>
                  <TableCell>{software.remarks}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
