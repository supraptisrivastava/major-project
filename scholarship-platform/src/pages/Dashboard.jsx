
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom"; // 
// // import UploadForm from "../components/UploadForm";
// // import Sidebar from "../components/Sidebar";

// // const scholarships = [
// //   { 
// //     name: "Merit Scholarship", 
// //     criteria: [
// //       "Minimum CGPA: 8.0",
// //       "Family Income: Less than ₹5,00,000/year"
// //     ]
// //   },
// //   { 
// //     name: "Need-Based Scholarship", 
// //     criteria: [
// //       "Minimum CGPA: 6.5",
// //       "Family Income: Less than ₹7,00,000/year"
// //     ]
// //   },
// //   { 
// //     name: "Sports Scholarship", 
// //     criteria: [
// //       "Minimum CGPA: 6.0",
// //       "Must have won inter-college/state competitions"
// //     ]
// //   },
// //   { 
// //     name: "Research Scholarship", 
// //     criteria: [
// //       "Minimum CGPA: 8.5",
// //       "Must be involved in approved research projects"
// //     ]
// //   },
// // ];

// // export default function Dashboard({ setUser }) {
// //   const [activeTab, setActiveTab] = useState("scholarships");
// //   const [openDropdown, setOpenDropdown] = useState(null);

// //   const navigate = useNavigate();

// // const handleLogout = () => {
// //   setUser(null); // clear logged-in user
// //   navigate("/"); // redirect to login page
// // };

// //   return (
// //     <div
// //       className="flex h-screen bg-cover bg-center"
// //       style={{ backgroundImage: "url('/bg1.jpg')" }}
// //     >
// //       <Sidebar setActiveTab={setActiveTab} />

// // <div className="flex-1 p-8 overflow-y-auto bg-white/80 backdrop-blur-[1px]">
// //         {/* <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 text-center">
// //           AJAY KUMAR GARG ENGINEERING COLLEGE
// //         </h1> */}
// //         <div className="flex justify-between items-center mb-6">
// //   <h1 className="text-4xl font-extrabold text-indigo-800 text-center flex-1">
// //     AJAY KUMAR GARG ENGINEERING COLLEGE
// //   </h1>
// //   <button
// //     onClick={handleLogout}
// //     className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
// //   >
// //     Logout
// //   </button>
// // </div>

// //         <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
// //           Scholarships & Internships
// //         </h2>

// //         {activeTab === "scholarships" && (
// //           <div className="grid grid-cols-2 gap-4">
// //             {scholarships.map((scholarship, idx) => (
// //               <div key={idx} className="relative">
// //                 <div
// //                   onClick={() =>
// //                     setOpenDropdown(openDropdown === idx ? null : idx)
// //                   }
// //                   className="bg-indigo-100 p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
// //                 >
// //                   {scholarship.name}
// //                 </div>

// //                 {openDropdown === idx && (
// //                   <div className="absolute mt-2 p-4 bg-white rounded shadow w-full z-10">
// //                     <p className="text-sm text-gray-700 mb-2 font-semibold">Eligibility Criteria:</p>
// //                     <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
// //                       {scholarship.criteria.map((item, i) => (
// //                         <li key={i}>{item}</li>
// //                       ))}
// //                     </ul>
// //                     <button
// //                       onClick={() => setActiveTab("income")}
// //                       className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
// //                     >
// //                       Check Eligibility
// //                     </button>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         )}

// //         {activeTab === "income" && <UploadForm title="Upload Income Certificate" />}
// //         {activeTab === "result" && <UploadForm title="Upload Result" />}
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import UploadForm from "../components/UploadForm";
// import Sidebar from "../components/Sidebar";

// export default function Dashboard({ setUser }) {
//   const [activeTab, setActiveTab] = useState("scholarships");
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [scholarships, setScholarships] = useState([]);

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setUser(null);
//     navigate("/");
//   };

//   // Load scholarships from localStorage on component mount
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("scholarships") || "[]");
//     if (saved.length > 0) {
//       setScholarships(saved);
//     } else {
//       // Fallback default scholarships if localStorage empty
//       setScholarships([
//         { 
//           id: 1,
//           name: "Merit Scholarship", 
//           criteria: [
//             "Minimum CGPA: 8.0",
//             "Family Income: Less than ₹5,00,000/year"
//           ]
//         },
//         { 
//           id: 2,
//           name: "Need-Based Scholarship", 
//           criteria: [
//             "Minimum CGPA: 6.5",
//             "Family Income: Less than ₹7,00,000/year"
//           ]
//         },
//         { 
//           id: 3,
//           name: "Sports Scholarship", 
//           criteria: [
//             "Minimum CGPA: 6.0",
//             "Must have won inter-college/state competitions"
//           ]
//         },
//         { 
//           id: 4,
//           name: "Research Scholarship", 
//           criteria: [
//             "Minimum CGPA: 8.5",
//             "Must be involved in approved research projects"
//           ]
//         },
//       ]);
//     }
//   }, []);

//   return (
//     <div
//       className="flex h-screen bg-cover bg-center"
//       style={{ backgroundImage: "url('/bg1.jpg')" }}
//     >
//       <Sidebar setActiveTab={setActiveTab} />

//       <div className="flex-1 p-8 overflow-y-auto bg-white/80 backdrop-blur-[1px]">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-4xl font-extrabold text-indigo-800 text-center flex-1">
//             AJAY KUMAR GARG ENGINEERING COLLEGE
//           </h1>
//           <button
//             onClick={handleLogout}
//             className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//           >
//             Logout
//           </button>
//         </div>

//         <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
//           Scholarships & Internships
//         </h2>

//         {activeTab === "scholarships" && (
//           <div className="grid grid-cols-2 gap-4">
//             {scholarships.map((scholarship, idx) => (
//               <div key={scholarship.id || idx} className="relative">
//                 <div
//                   onClick={() =>
//                     setOpenDropdown(openDropdown === idx ? null : idx)
//                   }
//                   className="bg-indigo-100 p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
//                 >
//                   {scholarship.name}
//                 </div>

//                 {openDropdown === idx && (
//                   <div className="absolute mt-2 p-4 bg-white rounded shadow w-full z-10">
//                     <p className="text-sm text-gray-700 mb-2 font-semibold">
//                       Eligibility Criteria:
//                     </p>
//                     <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
//                       {scholarship.criteria.map((item, i) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ul>
//                     <button
//                       onClick={() => setActiveTab("income")}
//                       className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
//                     >
//                       Check Eligibility
//                     </button>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}

//         {activeTab === "income" && <UploadForm title="Upload Income Certificate" />}
//         {activeTab === "result" && <UploadForm title="Upload Result" />}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UploadForm from "../components/UploadForm";
import Sidebar from "../components/Sidebar";

export default function Dashboard({ setUser }) {
  const [activeTab, setActiveTab] = useState("scholarships");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [scholarships, setScholarships] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  // Load scholarships from localStorage on component mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("scholarships") || "[]");
    if (Array.isArray(saved) && saved.length > 0) {
      // Normalize data to match expected structure
      const normalized = saved.map((sch) => ({
        id: sch.id || Math.random().toString(36).substr(2, 9),
        name: sch.title || sch.name || "Unnamed Scholarship",
        criteria: sch.description
          ? [sch.description]
          : sch.criteria || [],
      }));
      setScholarships(normalized);
    } else {
      // Fallback default scholarships if localStorage is empty
      setScholarships([
        { 
          id: 1,
          name: "Merit Scholarship", 
          criteria: [
            "Minimum CGPA: 8.0",
            "Family Income: Less than ₹5,00,000/year"
          ]
        },
        { 
          id: 2,
          name: "Need-Based Scholarship", 
          criteria: [
            "Minimum CGPA: 6.5",
            "Family Income: Less than ₹7,00,000/year"
          ]
        },
        { 
          id: 3,
          name: "Sports Scholarship", 
          criteria: [
            "Minimum CGPA: 6.0",
            "Must have won inter-college/state competitions"
          ]
        },
        { 
          id: 4,
          name: "Research Scholarship", 
          criteria: [
            "Minimum CGPA: 8.5",
            "Must be involved in approved research projects"
          ]
        },
      ]);
    }
  }, []);

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      <Sidebar setActiveTab={setActiveTab} />

      <div className="flex-1 p-8 overflow-y-auto bg-white/80 backdrop-blur-[1px]">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-extrabold text-indigo-800 text-center flex-1">
            AJAY KUMAR GARG ENGINEERING COLLEGE
          </h1>
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
          Scholarships & Internships
        </h2>

        {/* Scholarships Tab */}
        {activeTab === "scholarships" && (
          <div className="grid grid-cols-2 gap-4">
            {(scholarships || []).map((scholarship, idx) => (
              <div key={scholarship.id || idx} className="relative">
                <div
                  onClick={() =>
                    setOpenDropdown(openDropdown === idx ? null : idx)
                  }
                  className="bg-indigo-100 p-4 rounded-lg shadow hover:shadow-md cursor-pointer"
                >
                  {scholarship.name}
                </div>

                {openDropdown === idx && (
                  <div className="absolute mt-2 p-4 bg-white rounded shadow w-full z-10">
                    <p className="text-sm text-gray-700 mb-2 font-semibold">
                      Eligibility Criteria:
                    </p>
                    <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
                      {(scholarship.criteria || []).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <button
                      onClick={() => setActiveTab("income")}
                      className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
                    >
                      Check Eligibility
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === "income" && <UploadForm title="Upload Income Certificate" />}
        {activeTab === "result" && <UploadForm title="Upload Result" />}
      </div>
    </div>
  );
}

