import { useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import Hero from "./components/Hero";
import UploadArea from "./components/UploadArea";
import QueryPreview from "./components/QueryPreview";
import SearchButton from "./components/SearchButton";
import ResultsGrid from "./components/ResultsGrid";

export default function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/search",
        formData
      );

      setResults(response.data.results);

    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950">

      <Header />

      <Hero />

      <div className="mx-auto max-w-7xl px-6 pb-20">

        <UploadArea onFileSelect={setSelectedFile} />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div>
            <h2 className="mb-4 text-xl font-semibold text-white">
              Query Image
            </h2>

            <QueryPreview file={selectedFile} />
          </div>

          <div className="flex items-center">
            <SearchButton
              loading={loading}
              disabled={!selectedFile}
              onClick={handleSearch}
            />
          </div>

        </div>

        <ResultsGrid results={results} />

      </div>

    </div>
  );
}