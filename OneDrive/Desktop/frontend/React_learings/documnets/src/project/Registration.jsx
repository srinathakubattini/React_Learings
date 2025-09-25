import React,{useState} from "react";
function Registration(){
    const[user,setUser]=useState("");
    const[password,setPassword]=useState("");
    const[recreat,setRecreat]=useState("");
    const[email,setEmail]=useState("");
    const [error,setError]=useState("");

    const Registration =(e)=>{
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
           <div className="flex flex-col justify-center items-center">
                 <div className="border w-100 p-10 bg-gray-200 rounded flex flex-col justify-center items-center">
                   <h1 className="text-2xl text-teal-600 font-bold ">Registration</h1>
                   {error && (
                    <div>{error}</div>
                    )}
                   <form action="" onSubmit={Registration}>
                     <div>
                         <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Enter username"
                         className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 
                            ${
                            user
                               ? "border-green-400 focus:ring-green-300"
                               : "border-black focus:ring-indigo-400"
                            }`}/>
                         <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" 
                         className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 
                            ${
                            password
                               ? "border-green-400 focus:ring-green-300"
                               : "border-black focus:ring-indigo-400"
                            }`}/>
                            <input type="password" value={recreat} onChange={(e)=>setRecreat(e.target.value)} placeholder="Retype password"
                            className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 
                            ${
                            recreat
                               ? "border-green-400 focus:ring-green-300"
                               : "border-black focus:ring-indigo-400"
                            }`}/> 
                            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"
                            className={`w-full px-4 py-2 mt-2 border border-black rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 
                            ${
                            email
                               ? "border-green-400 focus:ring-green-300"
                               : "border-black focus:ring-indigo-400"
                            }`}/>
                     </div>
                   </form>
                   <button className="border p-2 m-1 rounded  ">Submit</button>
                </div>
           </div>
        </>
    )
}
export default Registration;