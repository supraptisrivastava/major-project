// import React from "react";
// import { Link } from "react-router-dom";

// export default function AdminDashboard() {
//   const scholarships = JSON.parse(localStorage.getItem("scholarships") || "[]");

//   const deleteScholarship = (id) => {
//     const updated = scholarships.filter((sch) => sch.id !== id);
//     localStorage.setItem("scholarships", JSON.stringify(updated));
//     window.location.reload(); // Refresh page to show updated list
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

//       <Link
//         to="/create-scholarship"
//         className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-5"
//       >
//         ➕ Create Scholarship
//       </Link>

//       <h2 className="text-xl font-semibold mb-4">All Scholarships</h2>

//       {scholarships.length === 0 && (
//         <p>No scholarships created yet.</p>
//       )}

//       {scholarships.map((s) => (
//         <div key={s.id} className="border p-4 rounded mb-4 shadow">
//           <h3 className="text-lg font-bold">{s.title}</h3>
//           <p className="mb-3">{s.description}</p>

//           <div className="flex gap-3">
//             <Link
//               to={`/edit-scholarship/${s.id}`}
//               className="bg-yellow-500 text-white px-3 py-1 rounded"
//             >
//               Edit
//             </Link>

//             <button
//               onClick={() => deleteScholarship(s.id)}
//               className="bg-red-600 text-white px-3 py-1 rounded"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const scholarships = JSON.parse(localStorage.getItem("scholarships") || "[]");

  const deleteScholarship = (id) => {
    const updated = scholarships.filter((sch) => sch.id !== id);
    localStorage.setItem("scholarships", JSON.stringify(updated));
    window.location.reload(); // Refresh page to show updated list
  };

  const handleLogout = () => {
    localStorage.removeItem("role"); // optional
    navigate("/"); // redirect to login
  };

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Top bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-700">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <Link
        to="/create-scholarship"
        className="bg-blue-600 text-white px-4 py-2 rounded inline-block mb-5"
      >
        ➕ Create Scholarship
      </Link>

      <h2 className="text-xl font-semibold mb-4">All Scholarships</h2>

      {scholarships.length === 0 && <p>No scholarships created yet.</p>}

      {scholarships.map((s) => (
        <div key={s.id} className="border p-4 rounded mb-4 shadow bg-white/80">
          <h3 className="text-lg font-bold">{s.title}</h3>
          <p className="mb-3">{s.description}</p>

          <div className="flex gap-3">
            <Link
              to={`/edit-scholarship/${s.id}`}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Edit
            </Link>

            <button
              onClick={() => deleteScholarship(s.id)}
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
