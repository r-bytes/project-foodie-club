import Link from "next/link"

const Navbar = () => {
    return (
        <div className="w-3/4 mx-auto h-full flex justify-between">
                <div className="w-1/3 flex items-center justify-start"> logo </div>
                <nav className="flex-1">
                    <ul className="flex justify-end items-center h-full w-full mx-auto text-right ">
                        <li className="group w-64">
                            <Link className="pl-14 group relative p-5 text-xl font-semibold tracking-widest flex" href={"/cousine/all"} > Cuisines </Link>
                            <span className="absolute top-20 bg-zinc-900/50 rounded backdrop-blur-lg rouded hidden group-hover:flex transition ease-in duration-700 flex-col p-10 space-y-10 w-56">
                                <span className="flex rouded hover:bg-zinc-700/50 backdrop-blur-lg h-full"> <h3 className="text-left pl-6 text-md font-semibold tracking-widest"> Indonesian </h3></span>
                                <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Italian </h3></span>
                                <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Thaise </h3></span>
                                <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Vietnamese </h3></span>
                            </span>
                        </li>
                        
                        <li className="w-64 p-5 text-xl font-semibold tracking-widest"> Categories </li>
                        <li className="w-64 p-5 text-xl font-semibold tracking-widest"> Types </li>
                    </ul>
                </nav>
            </div>
    )
}
export default Navbar