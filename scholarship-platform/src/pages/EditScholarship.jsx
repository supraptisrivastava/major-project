import React, { useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditScholarship() {
  const { id } = useParams();
  const navigate = useNavigate();

  const scholarships = JSON.parse(localStorage.getItem("scholarships") || "[]");
  const scholarship = scholarships.find((sch) => sch.id === Number(id));

  const [title, setTitle] = useState(scholarship?.title || "");
  const [description, setDescription] = useState(scholarship?.description || "");

  const handleUpdate = () => {
    const updated = scholarships.map((sch) =>
      sch.id === Number(id)
        ? { ...sch, title, description }
        : sch
    );

    localStorage.setItem("scholarships", JSON.stringify(updated));
    navigate("/admin-dashboard");
  };

  if (!scholarship) {
    return <p className="p-6">Scholarship not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Scholarship</h1>

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Scholarship Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 rounded"
        placeholder="Scholarship Description"
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update Scholarship
      </button>
    </div>
  );
}
