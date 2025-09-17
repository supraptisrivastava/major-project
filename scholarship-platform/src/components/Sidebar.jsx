// import { useState } from "react";

// export default function Sidebar() {
//   const [uploadType, setUploadType] = useState("");

//   return (
//     <div className="w-64 bg-gray-900 text-white p-6 flex flex-col">
//       <h2 className="text-xl font-bold mb-6">Menu</h2>
//       <button
//         onClick={() => setUploadType("Income Certificate")}
//         className="mb-3 p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
//       >
//         Upload Income Certificate
//       </button>
//       <button
//         onClick={() => setUploadType("Result")}
//         className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600"
//       >
//         Upload Result
//       </button>

//       {uploadType && (
//         <div className="mt-6">
//           <h3 className="font-bold mb-2">Upload {uploadType}:</h3>
//           <input type="file" className="w-full p-2 border rounded-lg" />
//           <button className="mt-3 w-full bg-blue-600 p-2 rounded-lg hover:bg-blue-700">
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
export default function Sidebar({ setActiveTab }) {
  return (
    <div className="w-72 bg-indigo-800 text-white flex flex-col p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <button 
        onClick={() => setActiveTab("scholarships")} 
        className="mb-3 bg-indigo-600 hover:bg-indigo-500 p-3 rounded-lg transition"
      >
        Scholarships
      </button>
      <button 
        onClick={() => setActiveTab("income")} 
        className="mb-3 bg-indigo-600 hover:bg-indigo-500 p-3 rounded-lg transition"
      >
        Upload Income Certificate
      </button>
      <button 
        onClick={() => setActiveTab("result")} 
        className="bg-indigo-600 hover:bg-indigo-500 p-3 rounded-lg transition"
      >
        Upload Result
      </button>
    </div>
  );
}
