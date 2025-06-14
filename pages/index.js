import { useState } from "react";
import ManualForm from "../components/ManualForm";
import FileImportForm from "../components/FileImportForm";

export default function Home() {
  const [mode, setMode] = useState("manual"); // 'manual' or 'import'

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Ajouter une Offre</h1>

        {/* Switch buttons */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode("manual")}
            className={`px-4 py-2 rounded font-medium ${
              mode === "manual"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Remplissage Manuel
          </button>
          <button
            onClick={() => setMode("import")}
            className={`px-4 py-2 rounded font-medium ${
              mode === "import"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Importer depuis un Fichier
          </button>
        </div>

        {/* Form area */}
        {mode === "manual" ? <ManualForm /> : <FileImportForm />}
      </div>
    </div>
  );
}
