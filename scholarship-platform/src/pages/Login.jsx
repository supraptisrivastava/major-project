
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { motion } from "framer-motion";

// export default function Login({ setUser }) {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (email.endsWith("@akgec.ac.in")) {
//       setUser({ email });
//       navigate("/Dashboard"); // ✅ redirect to dashboard
//     } else {
//       setError("Please use your college email ID only.");
//     }
//   };

//   return (

//   <div
//   className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
//   style={{ backgroundImage: "url('/bg2.jpg')" }} // <-- your image name
// >
//   <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}
    
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md"
//       >
//         <Card className="shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm">
//           <CardHeader>
//             <CardTitle className="text-center text-2xl font-bold text-indigo-700">
//               Student Login
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <Input
//               type="email"
//               placeholder="Enter your college email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="mb-4"
//             />
//             {error && (
//               <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
//             )}
//             <Button
//               onClick={handleLogin}
//               className="w-full bg-indigo-600 hover:bg-indigo-700"
//             >
//               Login
//             </Button>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

export default function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("student"); // ✅ role state
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.endsWith("@akgec.ac.in")) {
      setError("Please use your college email ID only.");
      return;
    }

    // Save user & role
    setUser({ email, role });
    localStorage.setItem("role", role);

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/bg2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* overlay */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-indigo-700">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Role Selector */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border p-2 w-full rounded mb-4"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>

            {/* Email input */}
            <Input
              type="email"
              placeholder="Enter your college email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
            )}

            {/* Login button */}
            <Button
              onClick={handleLogin}
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

