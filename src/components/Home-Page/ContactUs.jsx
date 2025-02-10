
import BackGroundEmoji from './BackGroundEmoji';

function ContactUs() {
    return (
        <div className="md:h-screen bg-amber-950  flex items-center m-auto flex-col relative">
            <div className=' absolute w-full h-full z-0 text-7xl text-yellow-300/10 flex flex-wrap top-0 left-0'>
                <BackGroundEmoji />
            </div>
            <div className='py-8 z-50 w-full container'>
                <h1 className=' text-7xl uppercase  font-bold text-center text-orange-200 my-10 z-10'>Contact Us</h1>

                <div className='bg-orange-200/65 rounded-2xl w-[80%] mx-auto p-8 shadow-lg'>
                    <form className=" mx-auto">

                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="floating_first_name"
                                    id="floating_first_name"
                                    className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_first_name"
                                    className="peer-focus:font-medium absolute text-sm text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    First name
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="floating_last_name"
                                    id="floating_last_name"
                                    className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_last_name"
                                    className="peer-focus:font-medium absolute text-sm text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Last name
                                </label>
                            </div>
                        </div>

                        {/* Phone and Company */}
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    name="floating_phone"
                                    id="floating_phone"
                                    className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_phone"
                                    className="peer-focus:font-medium absolute text-sm text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Phone number (123-456-7890)
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-8 group">
                                <input
                                    type="text"
                                    name="floating_company"
                                    id="floating_company"
                                    className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                    placeholder=" "
                                    required
                                />
                                <label
                                    htmlFor="floating_company"
                                    className="peer-focus:font-medium absolute text-sm text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                    Company (Ex. Google)
                                </label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Email address
                            </label>
                        </div>

                        <div className="relative z-0 w-full mb-8 group">
                            <textarea
                                name="floating_message"
                                id="floating_message"
                                className="block py-2.5 px-0 w-full text-sm text-red-950 bg-transparent border-0 border-b-2 border-red-950 appearance-none focus:outline-none focus:ring-0 focus:border-red-950 peer"
                                placeholder=" "
                                required
                                rows="4"
                                cols="50"
                            />
                            <label
                                htmlFor="floating_message"
                                className="peer-focus:font-medium absolute text-2xl text-red-950 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-950 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your request or question
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-red-950 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
