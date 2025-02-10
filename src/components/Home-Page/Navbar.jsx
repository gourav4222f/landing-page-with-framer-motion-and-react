import Button from "./Button"
import { RxHamburgerMenu } from "react-icons/rx";


function Navbar() {
    return (
        <nav className=" absolute top-3 flex items-center z-10 w-full md:px-20 px-4 ">
            <img alt="Logo Img" src="./Logo.svg" className=" size-40" />
            <div className=" ml-auto  items-center gap-x-6 hidden md:flex">
                <Button variant="normal" className="text-lg">
                    CONTACT US
                </Button>
                <Button variant="cta" className="text-lg">
                    GET STARTED
                </Button>
            </div>
            <div className=" text-5xl ml-auto flex items-center gap-x-2 md:hidden ">
                <RxHamburgerMenu />
            </div>
        </nav>
    )
}

export default Navbar
