
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import { useState } from "react";


// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     // <BrowserRouter>
//       <div className="min-h-screen bg-gray-100">
//         <Routes>
//           {/* <Route path="/" element={<Login />} /> */}
//           <Route path="/" element={<Login setUser={setUser} />} />
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//           <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />
//         </Routes>
//       </div>
//     // </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreateScholarship from "./pages/CreateScholarship";
import EditScholarship from "./pages/EditScholarship";

function App() {
  const [user, setUser] = useState(null);

  return (
    // <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Login */}
          <Route path="/" element={<Login setUser={setUser} />} />

          {/* Student Dashboard */}
          <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />

          {/* Admin Pages */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/create-scholarship" element={<CreateScholarship />} />
          <Route path="/edit-scholarship/:id" element={<EditScholarship />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;
