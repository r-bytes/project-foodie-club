import { StyledMenu } from "."

const Navbar = () => {
    return (
        <div className="w-3/4 space-x-20 mx-auto h-full flex justify-between">
            <div className="px-12 w-1/3 flex items-center justify-start">
                logo
            </div>
            <nav className="flex-1">
                <ul className="px-12 flex justify-end items-center h-full w-full mx-auto text-right ">
                    <li className="group">
                        <StyledMenu />
                    </li>
                    <li className="w-64 text-md  uppercase font-black tracking-widest  cursor-pointer"> Categories </li>
                    <li className="w-64 text-md  uppercase font-black tracking-widest  cursor-pointer"> Types </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar