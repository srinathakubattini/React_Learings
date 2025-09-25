// import React from "react";
// import Button from "./Button";
// import Inputs from "./Inputs";
// function Header() {
//     return (
//        <div>
//              <div className="bg-gray-800 text-white shadow-md p-3">
//                 <nav className="flex justify-between items-center px-6 py-3">
                    
//                     <h1 className="text-xl font-bold tracking-wide">ReactCoder</h1>
//                     <div className="space-x-6">
//                         <a href="#" className="hover:text-yellow-400">Home</a>
//                         <a href="#" className="hover:text-yellow-400">Courses</a>
//                         <a href="#" className="hover:text-yellow-400">My Dashboard</a>
//                         <a href="#" className="hover:text-yellow-400">Contact</a>
//                         {/* <a href="#" className="bg-yellow-400 text-black px-3 py-1 rounded-lg hover:bg-yellow-500">
//                             Login
//                         </a> */}
//                         {/* <button className="bg-yellow-400 text-black px-3 py-1 rounded-lg hover:bg-yellow-500">Login</button> */}

//                         <Button/>
                        
//                     </div>
//                 </nav>
//             </div>
//             <div>
//                 <Inputs placeholder="Enter your name"/>
//                 <Inputs placeholder="Enter your email"/>
//                 <Inputs placeholder="Enter your password"/>
//                 <h1 className="h-100"></h1>
//             </div>
//             <div>
//                 <footer className="bg-gray-900 text-gray-300 py-6">
//                     <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                        
//                         <p className="text-sm">
//                             © {new Date().getFullYear()} ReactCoder. All rights reserved.
//                         </p>
    
//                         <div className="flex space-x-6 mt-4 md:mt-0">
//                             <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
//                             <a href="#" className="hover:text-yellow-400">Terms of Service</a>
//                             <a href="#" className="hover:text-yellow-400">Support</a>
//                         </div>
//                     </div>
//                 </footer>
//             </div>
//        </div>
//     );
// }

// export default Header;


import React from "react";
import Banner from "./Banner.jsx";
import Button from "./Button.jsx";
import Carts from "./Carts.jsx";

function Header ({cartCount}){

    return(
        <div className="bg-gray-100">
            <header className="flex justify-between p-5 bg-gray-800 text-white text-xl">
                <h1>My shop</h1>
                <p></p>
                <nav className="flex space-x-6 list-none ">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>My DashBoard</li>
                </nav>
                <Button/>
                <p>Cart:{cartCount}</p>
            </header>
           <Banner/>
           <Carts/>
           
        </div>
    )
}
export default Header;
