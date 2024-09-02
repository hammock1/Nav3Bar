import Reach from "react"

const Nav3Bar = ()=>{

    return(
        <nav className="bg-red-200">
          <div className="container flex justify-between items-center">
             <div className="p-10 text-lg font-bold text-white">
                    My Web Page
             </div>
             <div className="flex justify-between  space-x-4 p-10 text-lg font-bold text-white mx-5">
                    <a href="#" className="border-4 border-white-600 p-10">HOME | </a>
                    <a href="#"className="border-4 border-white-600 p-10">LOGIN</a>
                    <a href="#" className="border-4 border-white-600 p-10">CONTACT ME</a>
             </div>
          </div>


        </nav>




    )


}
export default Nav3Bar;