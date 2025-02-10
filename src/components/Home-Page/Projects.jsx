// import React from 'react'

// export default function Projects() {
//     return (
//         <div className='w-full bg-amber-950 p-4'>
//             <div className="w-full bg-orange-200 rounded-2xl flex items-center flex-col relative">
//                 <h2 className=" text-7xl uppercase mt-10 font-bold mr-auto ml-5 text-red-950">Projects We Delivered</h2>
//                 <div className=' w-full h-auto flex flex-col gap-y-4 items-center px-40 py-20'>
//                     <div className=' border-2 border-amber-950 w-full rounded-2xl h-[500px] overflow-hidden p-1 flex justify-between gap-2'>
//                         <img src="./img1.PNG" alt="img" srcset="" className=' w-1/2 h-full rounded-2xl' />
//                         <div className=' w-1/2'>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }


import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Projects() {

    var Projects = [
        { color: "bg-blue-500", title: "Arqitel", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas commodi velit provident minima quaerat, magnam nulla iandae perspiciatis asperiores deleniti impedit, quam eos?", live: false, case: true },
        { color: "bg-red-500", title: "Brightwave", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas commodi velit provident minima quaera, quam eos?", live: true, case: true },
        { color: "bg-green-500", title: "Cula", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas commodi velit provident minima quaerat, magna nemo? Dolorem repudiandae perspiciatis asperiores deleniti impedit, quam eos?", live: true, case: false },
        { color: "bg-yellow-500", title: "ProjectName", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas commodi velit provident minima quaerat, magnam nulla facere neeriores deleniti impedit, quam eos?", live: true, case: false },
        { color: "bg-purple-500", title: "Singularity", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas commodi velit provident minima quaerat, magnam nulla facere nemo? Dolorem repudiandae perspiciatis asperiores deleniti impedit, quam eos?", live: true, case: true },
        { color: "bg-pink-500", title: "Remind", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ab, iure ipsa quas coerspiciatis asperiores deleniti impedit, quam eos?", live: true, case: true }
    ]

    const [pos, setPos] = useState()

    const mover = (val) => {
        setPos(val * 23)
    }


    return (
        <>

            <div className='w-full bg-amber-950 h-full p-4 '>
                <div className=' mt-32 relative w-full md:pb-20 bg-orange-200 rounded-t-2xl flex items-center flex-col overflow-hidden'>
                    <h2 className=" md:text-7xl text-5xl uppercase mt-10 font-bold mr-auto ml-5 text-red-950">Projects We Delivered with ❤</h2>
                </div>
                
                <div className=' hidden  relative w-full bg-orange-200 rounded-b-2xl md:flex items-center flex-col overflow-hidden'>
                    {Projects.map((val, index) => <Product mover={mover} count={index} key={index} val={val} />)}
                    <div className=' w-full h-full absolute top-0 pointer-events-none'>
                        <motion.div
                            initial={{ y: pos, x: "-50%" }}
                            animate={{ y: pos + `rem` }}
                            transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }}
                            className='window w-[32rem] h-[23rem]  absolute left-[45%] overflow-hidden'>

                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D")]'></motion.div>
                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1680700308566-543a60569017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D")]'></motion.div>
                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1683121696175-d05600fefb85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRlY2h8ZW58MHx8MHx8fDA%3D")]'></motion.div>
                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D")]'></motion.div>
                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://plus.unsplash.com/premium_photo-1673709635882-3bd099a72359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRlY2h8ZW58MHx8MHx8fDA%3D")]'></motion.div>
                            <motion.div animate={{ y: -pos + `rem` }} transition={{ ease: [0.83, 0, 0.17, 1], duration: .6 }} className='window w-full h-full bg-no-repeat bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHRlY2h8ZW58MHx8MHx8fDA%3D")]'></motion.div>

                        </motion.div>
                    </div>
                </div>

                <div className='relative w-full bg-orange-200 rounded-b-2xl flex items-center flex-col  md:hidden'>
                    {Projects.map((val, index) => <Product mover={mover} count={index} key={index} val={val} />)}
                </div>
            </div>
        </>
    )
}

export default Projects