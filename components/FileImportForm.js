import { useState } from "react";

export default function FileImportForm() {
  const [importedData, setImportedData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    // محاكاة استخراج البيانات من الملف
    if (file) {
      setImportedData({
        title: "Développeur Front-End",
        description: "Développer des interfaces modernes en React.",
        skills: "React, Tailwind CSS, Git",
        education: "Bac+3",
        experience: "2 ans",
        location: "Paris",
        contract: "CDI",
        deadline: "2025-07-01",
        salary: "3000€ / mois",
      });
    }
  };

  return (
    <div className="space-y-4">
      {/* رفع الملف */}
      <div>
        <label className="block mb-2 font-medium">Téléverser un fichier</label>
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileUpload}
          className="block w-full border px-3 py-2 rounded"
        />
      </div>

      {/* عرض البيانات المستخرجة */}
      {importedData && (
        <form className="grid grid-cols-1 gap-4">
          {Object.entries(importedData).map(([key, value]) => (
            <div key={key}>
              <label className="capitalize block mb-1 font-medium">{key}</label>
              <input
                type="text"
                defaultValue={value}
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          ))}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded font-medium mt-4"
          >
            Confirmer les Données
          </button>
        </form>
      )}
    </div>
  );
}
