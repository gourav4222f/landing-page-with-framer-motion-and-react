import IconComponent from "./IconComponent";

const Offer = () => {


    return (
        <div className=' absolute bottom-5 md:left-5 bg-red-950  px-8 py-2 flex gap-x-6 rounded items-center text-orange-200'>
            <div className=" size-10 flex justify-center items-center">
                <IconComponent />
            </div>
            <div>
                <p className=' text-base font-bold'>MSTY Special Price</p>
                <p className=' text-sm font-semibold'>40% Off</p>
            </div>
        </div>
    )
}

export default Offer;

