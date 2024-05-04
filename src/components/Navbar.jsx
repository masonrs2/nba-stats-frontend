import { Link } from "react-router-dom"
import { NavbarList } from "../assets/constants/NavbarList"
import { useState, useContext, useEffect } from "react"
import { AuthContext } from "../AuthContext"
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false)
  const { isAuthenticated, isLoading, user, SetLogoutAuth } = useContext(AuthContext) 
  
  useEffect(() => {
      console.log("isAuthenticated: ", isAuthenticated)
      
  }, [isAuthenticated])
  return (
        <nav className="bg-blue-700 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-500 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Statmania Logo" />
                <span className="self-center text-gray-400 tracking-wide text-2xl font-semibold whitespace-nowrap dark:text-white">Statmania</span>
            </a>
            <div className="hidden lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                {
                    isAuthenticated ? ( 
                    <div className="flex gap-2" >
                        <a href="/account">
                            <button
                                type="button" 
                                className="text-gray-400 bg-zinc-900 hover:bg-zinc-900/80  focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <div className="flex gap-1 items-center jus">
                                        <CiUser size={17}  />
                                        <p>Account</p>
                                    </div>
                            </button>
                        </a>

                        <a href="/">
                            <button 
                                onClick={SetLogoutAuth}
                                type="button" 
                                className="text-gray-400 bg-zinc-900 hover:bg-zinc-900/80  focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <div className="flex gap-1 items-center jus">

                                        <p>Sign Out</p>
                                    </div>
                            </button>
                        </a>
                    </div>
                ) : (
                        <a href="/login">
                        <button 
                            onClick={() => setIsClicked(!isClicked)}
                            type="button" 
                            className="text-gray-400 bg-zinc-900 hover:bg-zinc-900/80  focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign In</button>
                    </a>
                    )
                }
               
            </div>
            <div className="flex gap-2 items-center" >
                <a href="/account">
                    <button
                        type="button" 
                        className={` ${isAuthenticated ? "lg:hidden" : "hidden"} text-gray-400 bg-zinc-900 hover:bg-zinc-900/80  focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
                        <div className="flex gap-1 items-center jus">
                            <CiUser size={17}  />
                            <p>Account</p>
                        </div>
                    </button>
                </a>
                <button 
                    onClick={() => setIsClicked(!isClicked)}
                    data-collapse-toggle="navbar-sticky" type="button" className=" inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>

                <div className="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 mr-40 xl:mr-60 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-700 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {
                            NavbarList.map((item, index) => (
                                <Link key={index} to={{
                                    pathname: `${item.path}`,
                                }} >
                                    <li zkey={index} className={`${index == 0 ? "text-black " : "text-gray-400"} cursor-pointer block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>{item.name}</li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>

            </div>
                {isClicked && (
                <div className="flex flex-col p-4 lg:hidden items-center justify-center gap-2">
                    {
                        NavbarList.map((item, index) => (
                            <Link key={index} to={{
                                pathname: `${item.path}`,
                            }} >
                                <li zkey={index} className={` items-center justify-center flex w-screen ${index == 0 ? "text-black " : "text-gray-400"} cursor-pointer block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>{item.name}</li>
                            </Link>
                        ))
                    }
                   <ul className="cursor-pointer block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-zinc-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                        <li>
                        { isAuthenticated ? 
                            (<a
                                onClick={SetLogoutAuth} // Corrected here
                                href="/" >Logout
                            </a>) : 
                            (
                                <a href="/login">Login</a>
                            )
                        }
                        </li>
                    </ul>
                </div>
            )}
        </nav>
  )
}

export default Navbar