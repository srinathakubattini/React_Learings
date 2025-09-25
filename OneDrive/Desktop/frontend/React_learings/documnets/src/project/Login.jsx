// import React, { useState } from "react";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError("All fields are required!");
//     } else {
//       setError("");
//       alert(`Logged in as: ${email}`);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           Login
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-2 rounded-md text-center mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-5">
//           {/* Email Input */}
//           <div>
//             <label className="block text-gray-700 text-sm font-semibold">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
//                 email
//                   ? "border-green-400 focus:ring-green-300"
//                   : "border-gray-300 focus:ring-indigo-400"
//               }`}
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-gray-700 text-sm font-semibold">
//               Password
//             </label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className={`w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
//                 password
//                   ? "border-green-400 focus:ring-green-300"
//                   : "border-gray-300 focus:ring-indigo-400"
//               }`}
//               placeholder="Enter your password"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md font-semibold transition-transform duration-300 hover:scale-105"
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-sm text-center text-gray-500 mt-6">
//           Don’t have an account?{" "}
//           <span className="text-indigo-600 hover:underline cursor-pointer">
//             Sign up
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React,{useState} from "react";
function Login(){
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!user || !password){
            setError("");
            alert("All the fields are required!");
        }else{
            setError("");
            alert(`Welcome:${user}`);
        }
    };
    return(
        <>
        <div className="p-30 flex flex-col justify-center items-center ">
            <div className="border bg-gray-200 rounded-xl p-5 h-90 w-100 ">
                {/* flex flex-col justify-center items-center */}
                <h2 className="text-4xl font-bold text-teal-700  text-center">Login</h2>
                {error && (
                    <div>{error}</div>
                )}
                <div className="">
                    <form action=""onSubmit={submit} className="flex flex-col justify-center items-center space-y-4 w-80 mx-auto">
                       <input type="text" value={user} onChange={(e) => setUser(e.target.value)} placeholder="Enter username" 
                       className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 
                       ${
                       user
                          ? "border-green-400 focus:ring-green-300"
                          : "border-black focus:ring-indigo-400"
                       }`}
                       />
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} 
                       className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300   
                           ${ password? "border-green-400 focus:ring-green-300": "border-black focus:ring-indigo-400"}`}
                       placeholder="Enter your password"/>
                       <button type="submit" className="px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300" >Login</button>
                    </form>
                </div>
                <p className="flex justify-center text-blue-500">Signup</p>
            </div>
        </div>
        </>
    )
}
export default Login;
