import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import { MdOutlineReadMore } from 'react-icons/md';

function Services() {
    const magicanimation = useRef()

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered

        gsap.from(magicanimation.current.querySelectorAll('.card'), {
            duration: 2,
            x: 1000,
            y: 1000,
            opacity: 0,
            stagger: 1,
            ease: 'circ',
            scrollTrigger: {
                trigger: '.magicanimation',
                start: 'top 2%',
                end: 'top -200%',
                pin: true,
                scrub: 2,
                // markers: true, // Uncomment to see visual markers for debugging
            },
        })

    }, [])


    return (

        <section className="w-full bg-amber-950 p-4 pb-0 ">
            <div ref={magicanimation} className=" magicanimation  h-[100vh] relative px-10  m-auto flex w-full bg-orange-200 rounded-2xl overflow-hidden   ">

                <h2 className=" text-7xl uppercase mt-10 font-bold md:absolute right-5 text-left text-red-950">What we provide</h2>
                <div className=' relative mt-40 ml-28'>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[0px] top-[30px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">01</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">Custom Website Design & Development</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[150px] top-[60px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">02</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">SEO & SEM Optimization Services</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[300px] top-[90px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">03</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">Social Media Management Solutions</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[450px] top-[120px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">04</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">E-commerce Platform Development</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[600px] top-[150px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">05</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">Content Creation & Marketing</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[750px] top-[180px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">06</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">Branding & Graphic Design Services</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[900px] top-[210px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">07</span>
                        <h2 className=" text-2xl text-red-950 font-bold absolute bottom-2 left-2">Website Analytics & Reporting</h2>
                    </div>
                    <div
                        className="card absolute  border-zinc-800 backdrop-opacity-95 bg-orange-100/65 border-2 w-[350px] h-[350px]  md:left-[1050px] top-[240px] ">
                        <span className="text-red-400 absolute text-8xl top-2 left-2 font-bold">08</span>
                        <h2 className=" underline text-2xl  text-red-950 font-bold absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col justify-center items-center ">And  many  more<br /> <MdOutlineReadMore className=" text-7xl text-red-950 cursor-pointer" /></h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
