export default function UploadForm({ title }) {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <input 
        type="file" 
        className="w-full border p-3 rounded mb-4"
      />
      <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
        Upload
      </button>
    </div>
  );
}
