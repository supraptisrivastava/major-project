// // // // // // import { useState } from "react";

// // // // // // export default function Login({ setUser }) {
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [error, setError] = useState("");

// // // // // //   const handleLogin = () => {
// // // // // //     if (email.endsWith("@akg.edu")) {
// // // // // //       setUser({ email });
// // // // // //     } else {
// // // // // //       setError("Please use your college email ID only.");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500">
// // // // // //       <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
// // // // // //         <h1 className="text-2xl font-bold text-center mb-6">Student Login</h1>
// // // // // //         <input
// // // // // //           type="email"
// // // // // //           placeholder="Enter college email"
// // // // // //           value={email}
// // // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // // //           className="w-full p-2 border rounded-lg mb-4"
// // // // // //         />
// // // // // //         {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
// // // // // //         <button
// // // // // //           onClick={handleLogin}
// // // // // //           className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
// // // // // //         >
// // // // // //           Login
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }
// // // // // import { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import toast, { Toaster } from "react-hot-toast";

// // // // // export default function Login() {
// // // // //   const [email, setEmail] = useState("");
// // // // //   const navigate = useNavigate();

// // // // //   const handleLogin = () => {
// // // // //     if (email.endsWith("@college.edu")) {
// // // // //       toast.success("Login successful!");
// // // // //       setTimeout(() => navigate("/dashboard"), 1000);
// // // // //     } else {
// // // // //       toast.error("Please enter a valid college email address!");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex h-screen items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
// // // // //       <Toaster />
// // // // //       <div className="bg-white p-10 rounded-2xl shadow-2xl w-[400px] text-center">
// // // // //         <h1 className="text-3xl font-extrabold mb-6 text-indigo-700">
// // // // //           Student Login
// // // // //         </h1>
// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Enter College Email"
// // // // //           value={email}
// // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // //           className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
// // // // //         />
// // // // //         <button
// // // // //           onClick={handleLogin}
// // // // //           className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition font-semibold"
// // // // //         >
// // // // //           Login
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function Login() {
// // // //   const [email, setEmail] = useState("");
// // // //   const navigate = useNavigate();

// // // //   const handleLogin = () => {
// // // //     // fake auth
// // // //     if (email) {
// // // //       navigate("/dashboard"); // go to dashboard
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col items-center justify-center h-screen">
// // // //       <input
// // // //         type="email"
// // // //         placeholder="Enter email"
// // // //         value={email}
// // // //         onChange={(e) => setEmail(e.target.value)}
// // // //         className="border p-2 rounded mb-4"
// // // //       />
// // // //       <button
// // // //         onClick={handleLogin}
// // // //         className="bg-blue-500 text-white px-4 py-2 rounded"
// // // //       >
// // // //         Login
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { motion } from "framer-motion";

// // // export default function LoginPage() {
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600">
// // //       <motion.div 
// // //         initial={{ opacity: 0, scale: 0.9 }}
// // //         animate={{ opacity: 1, scale: 1 }}
// // //         transition={{ duration: 0.5 }}
// // //       >
// // //         <Card className="w-[400px] shadow-2xl rounded-2xl">
// // //           <CardHeader>
// // //             <CardTitle className="text-center text-2xl font-bold">
// // //               Welcome Back
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <form className="space-y-4">
// // //               <div>
// // //                 <label className="text-sm font-medium">Email</label>
// // //                 <Input
// // //                   type="email"
// // //                   placeholder="you@example.com"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                   className="mt-1"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <label className="text-sm font-medium">Password</label>
// // //                 <Input
// // //                   type="password"
// // //                   placeholder="********"
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   className="mt-1"
// // //                 />
// // //               </div>
// // //               <Button className="w-full mt-4">Login</Button>
// // //               <p className="text-xs text-center text-gray-500 mt-2">
// // //                 Don’t have an account?{" "}
// // //                 <a href="/signup" className="text-indigo-600 hover:underline">
// // //                   Sign up
// // //                 </a>
// // //               </p>
// // //             </form>
// // //           </CardContent>
// // //         </Card>
// // //       </motion.div>
// // //     </div>
// // //   );
// // // }
// // import { useState } from "react";
// // import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// // import { Button } from "../components/ui/button";
// // import { Input } from "../components/ui/input";
// // import { motion } from "framer-motion";
// // // import { Plane } from "lucide-react";
// // import { Plane as PlaneIcon } from "lucide-react";


// // export default function LoginPage() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   return (
// //     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
// //       {/* Background image overlay */}
// //       <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?travel,plane')] bg-cover bg-center opacity-30"></div>
// //       <div className="absolute inset-0 bg-black/40"></div>

// //       <motion.div
// //         initial={{ opacity: 0, scale: 0.9, y: 20 }}
// //         animate={{ opacity: 1, scale: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         className="relative z-10"
// //       >
// //         <Card className="w-[400px] backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl border border-white/20">
// //           <CardHeader>
// //             <div className="flex flex-col items-center space-y-2">
// //               <PlaneIcon className="w-10 h-10 text-indigo-400" />
// //                 <CardTitle>Welcome Back</CardTitle>
// //               <p className="text-sm text-gray-200">Sign in to plan your next trip</p>
// //             </div>
// //           </CardHeader>
// //           <CardContent>
// //             <form className="space-y-4">
// //               <div>
// //                 <label className="text-sm font-medium text-gray-200">Email</label>
// //                 <Input
// //                   type="email"
// //                   placeholder="you@example.com"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className="mt-1 bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
// //                 />
// //               </div>
// //               <div>
// //                 <label className="text-sm font-medium text-gray-200">Password</label>
// //                 <Input
// //                   type="password"
// //                   placeholder="********"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   className="mt-1 bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
// //                 />
// //               </div>

// //               <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-xl shadow-lg hover:shadow-indigo-500/40">
// //                 Login
// //               </Button>

// //               <div className="relative my-4">
// //                 <div className="absolute inset-0 flex items-center">
// //                   <span className="w-full border-t border-gray-400/40"></span>
// //                 </div>
// //                 <div className="relative flex justify-center text-xs">
// //                   <span className="bg-white/10 px-2 text-gray-200">or</span>
// //                 </div>
// //               </div>

// //               <p className="text-xs text-center text-gray-200 mt-2">
// //                 Don’t have an account?{" "}
// //                 <a href="/signup" className="text-indigo-300 hover:underline">
// //                   Sign up
// //                 </a>
// //               </p>
// //             </form>
// //           </CardContent>
// //         </Card>
// //       </motion.div>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { motion } from "framer-motion";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 overflow-hidden">
//       {/* Background image overlay */}
//       <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?travel,plane')] bg-cover bg-center opacity-30"></div>
//       <div className="absolute inset-0 bg-black/40"></div>

//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 20 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="relative z-10"
//       >
//         <Card className="w-[400px] backdrop-blur-xl bg-white/10 shadow-2xl rounded-3xl border border-white/20">
//           <CardHeader>
//             <div className="flex flex-col items-center space-y-2">
//               {/* Removed Plane icon */}
//               <CardTitle>Welcome Back</CardTitle>
//               <p className="text-sm text-gray-200">Sign in to plan your next trip</p>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <form className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium text-gray-200">Email</label>
//                 <Input
//                   type="email"
//                   placeholder="you@example.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="mt-1 bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm font-medium text-gray-200">Password</label>
//                 <Input
//                   type="password"
//                   placeholder="********"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="mt-1 bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-2 focus:ring-indigo-400"
//                 />
//               </div>

//               <Button className="w-full mt-4 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-xl shadow-lg hover:shadow-indigo-500/40">
//                 Login
//               </Button>

//               <div className="relative my-4">
//                 <div className="absolute inset-0 flex items-center">
//                   <span className="w-full border-t border-gray-400/40"></span>
//                 </div>
//                 <div className="relative flex justify-center text-xs">
//                   <span className="bg-white/10 px-2 text-gray-200">or</span>
//                 </div>
//               </div>

//               <p className="text-xs text-center text-gray-200 mt-2">
//                 Don’t have an account?{" "}
//                 <a href="/signup" className="text-indigo-300 hover:underline">
//                   Sign up
//                 </a>
//               </p>
//             </form>
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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email.endsWith("@akgec.ac.in")) {
      setUser({ email });
      navigate("/Dashboard"); // ✅ redirect to dashboard
    } else {
      setError("Please use your college email ID only.");
    }
  };

  return (
    // <div
    //   className="flex items-center justify-center min-h-screen bg-cover bg-center"
    //   style={{
    //     backgroundImage: "url('/your-background.jpg')", // ✅ replace with your image path
    //   }}
    // >
  <div
  className="flex items-center justify-center min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: "url('/bg2.jpg')" }} // <-- your image name
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
              Student Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="email"
              placeholder="Enter your college email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            {error && (
              <p className="text-red-500 text-sm mb-2 text-center">{error}</p>
            )}
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
