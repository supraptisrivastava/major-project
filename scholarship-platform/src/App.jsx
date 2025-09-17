// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
// import { useState } from "react";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";

// function App() {
//   const [user, setUser] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {!user ? (
//         <Login setUser={setUser} />
//       ) : (
//         <Dashboard user={user} />
//       )}
//     </div>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);

  return (
    // <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Login setUser={setUser} />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />
        </Routes>
      </div>
    // </BrowserRouter>
  );
}

export default App;
