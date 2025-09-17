// export default function ScholarshipList() {
//   const scholarships = [
//     "Merit Scholarship",
//     "Need-based Scholarship",
//     "Sports Excellence Scholarship",
//     "Women in Tech Scholarship",
//     "Research Grant",
//     "Cultural Talent Scholarship",
//     "Entrepreneurship Support",
//     "Innovation Challenge Award",
//     "Community Service Scholarship",
//     "Leadership Award",
//   ];

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Available Scholarships</h2>
//       <ul className="grid grid-cols-2 gap-4">
//         {scholarships.map((s, idx) => (
//           <li
//             key={idx}
//             className="p-4 bg-white shadow rounded-lg hover:shadow-lg"
//           >
//             {s}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
const scholarships = [
  "Merit-based Scholarship",
  "Need-based Scholarship",
  "SC/ST Scholarship",
  "Minority Scholarship",
  "Sports Scholarship",
  "Research Scholarship",
  "Women Empowerment Scholarship",
  "Disability Support Scholarship",
  "Cultural Scholarship",
  "National Talent Scholarship",
];

export default function ScholarshipList() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-indigo-700 mb-4">Available Scholarships</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {scholarships.map((item, idx) => (
          <div 
            key={idx} 
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
