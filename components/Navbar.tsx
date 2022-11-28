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
                        <StyledMenu />
                    </li>
                    <li className="w-64 text-md  uppercase font-black tracking-widest"> Categories </li>
                    <li className="w-64 text-md  uppercase font-black tracking-widest"> Types </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar