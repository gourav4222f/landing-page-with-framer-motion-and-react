import Marquee from "react-fast-marquee";
import Navbar from "./Navbar";
import Offer from "./Offer";
import { VscDebugBreakpointLogUnverified, VscDebugBreakpointLog } from "react-icons/vsc";
import { TiArrowSortedDown } from "react-icons/ti";
import { TextAnimation } from "./TextAnimation";
import ThreeFiberAnimation from "./ThreeFiberAnimation";


function Herosection() {
    return (
        <div className='w-full bg-amber-950 h-screen p-4'>
            <div className="w-full h-full bg-orange-200 rounded-2xl overflow-hidden flex justify-center items-center relative">
                <Navbar />
                <div className=" absolute">
                    <Marquee speed={100} className=" tracking-tight text-[100px] lg:[150px] xl:text-[200px] font-[600] uppercase h-full text-red-950 z-10">
                        MSTY Crafting Seamless Digital Experiences One Line of Code at a Time
                    </Marquee>
                </div>

                <div className=" hidden md:block">
                    <ThreeFiberAnimation />
                </div>
                

                <div className=" hidden absolute top-40 left-24 max-w-sm text-2xl font-medium text-red-950 md:flex items-center justify-center gap-x-4">
                    <div className=" flex items-center self-start">
                        <span><VscDebugBreakpointLogUnverified /></span>
                        <span><VscDebugBreakpointLog /></span>
                    </div>
                    <p>Where Creativity Meets Code— <br />Turning Ideas into Digital Experiences</p>
                </div>


                <div className=" absolute top-40 md:right-32 max-w-sm text-2xl font-medium text-red-950 flex items-center justify-center gap-x-4">
                    <div className=" flex items-center self-start">
                        <span><VscDebugBreakpointLogUnverified /></span>
                        <span><VscDebugBreakpointLog /></span>
                    </div>
                    <p><span>What we provide-</span> <br /><span className=" font-semibold"><TextAnimation /></span></p>
                </div>


                <div className=" absolute md:bottom-20 bottom-24 px-4 md:right-24 text-xl tracking-tight font-medium text-red-950 flex items-center justify-center gap-x-4">
                    <p>THE WEB ANIMATION ULTIMATE GUIDE</p>
                    <div className=" flex items-center justify-center text-4xl self-start border-2 border-red-950 size-12 rounded-full">
                        <span><TiArrowSortedDown /></span>
                    </div>
                </div>

                <Offer />
            </div>
        </div>
    );
}

export default Herosection;
