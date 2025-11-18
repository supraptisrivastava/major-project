import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateScholarship() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    if (!title.trim()) {
      alert("Title cannot be empty");
      return;
    }

    const scholarships = JSON.parse(localStorage.getItem("scholarships") || "[]");

    const newScholarship = {
      id: Date.now(),
      title,
      description,
    };

    scholarships.push(newScholarship);
    localStorage.setItem("scholarships", JSON.stringify(scholarships));

    navigate("/admin-dashboard");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create Scholarship</h1>

      <input
        className="border p-2 w-full mb-3 rounded"
        placeholder="Scholarship Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-3 rounded"
        placeholder="Scholarship Description"
        rows={4}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Scholarship
      </button>
    </div>
  );
}
