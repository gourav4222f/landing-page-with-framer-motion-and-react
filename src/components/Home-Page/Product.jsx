import React from 'react'
import Button from './Button'

function Product({ val, mover, count }) {
    return (

        <div className={` w-full px-4 md:px-10 py-8 md:py-20 md:h-[23rem] text-amber-950 hover:bg-orange-100`}>
            <div onMouseEnter={() => { mover(count) }} className=' max-w-full mx-auto text-amber-950 flex justify-between items-center flex-col md:flex-row'>
                <h1 className=' md:text-6xl text-4xl mr-auto pb-5 md:p-0 md:m-0 capitalize font-medium'>{val.title}</h1>
                <div className=' dets w-full md:w-1/3 '>
                    <p className=' md:pb-10 text-xl md:text-2xl'>{val.description}</p>
                    <div className=' flex justify-between gap-x-1 items-center mt-5 md:mt-0'>
                        {val.live && <Button variant="cta" className="md:text-lg text-xs text-nowrap">KNOW MORE</Button>}
                        {val.case && <Button variant="normal" className="md:text-lg text-xs text-nowrap">DOCUMENTATION</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product