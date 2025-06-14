export default function ManualForm() {
  return (
    <form className="grid grid-cols-1 gap-4">
      <div>
        <label className="block mb-1 font-medium">Titre du poste</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Description</label>
        <textarea className="w-full border px-3 py-2 rounded h-24" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Compétences requises</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Niveau d’éducation</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Expérience</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Lieu</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Type de contrat</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Date limite</label>
        <input type="date" className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block mb-1 font-medium">Salaire (optionnel)</label>
        <input type="text" className="w-full border px-3 py-2 rounded" />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded font-medium mt-4"
      >
        Créer l’offre
      </button>
    </form>
  );
}
