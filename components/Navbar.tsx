import Link from "next/link"
import { StyledMenu } from "."

const Navbar = () => {
    return (
        <div className="w-3/4 mx-auto h-full flex justify-between">
            <div className="w-1/3 flex items-center justify-start">
                logo
            </div>
            <nav className="flex-1 pr-16">
                <ul className="flex justify-end items-center h-full w-full mx-auto text-right ">
                    <li className="group">
                        {/* <Link className="group relative text-md  uppercase font-black tracking-widest flex" href={"/cuisines/all"} > Cuisines </Link> */}
                        <StyledMenu />
                        {/* <span className="absolute top-20 bg-zinc-900/50 rounded backdrop-blur-lg rouded hidden group-hover:flex transition ease-in duration-700 flex-col p-10 space-y-10">
                            <span className="flex rouded hover:bg-zinc-700/50 backdrop-blur-lg h-full"> <h3 className="text-left pl-6 text-md font-semibold tracking-widest"> Indonesian </h3></span>
                            <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Italian </h3></span>
                            <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Thaise </h3></span>
                            <span className="rouded text-left pl-6"> <h3 className="text-md font-semibold tracking-widest"> Vietnamese </h3></span>
                        </span> */}
                    </li>
                    
                    <li className="w-64 text-md  uppercase font-black tracking-widest"> Categories </li>
                    <li className="w-64 text-md  uppercase font-black tracking-widest"> Types </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar