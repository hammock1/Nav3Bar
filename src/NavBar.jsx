import React from "react"

const NavBar = ()=>{

    return(
        <nav className="bg-red-600 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">
                    My App
                </div>
                <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200">Home</a>
                    <a href="#" className="text-white hover:text-gray-200">Login</a>
                    <a href="#" className="text-white hover:text-gray-200">Contact US</a>

                </div>

            </div>

        </nav>
    )
}

export default NavBar;