"use client"
import React from "react"
import Image from "next/image"

import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
    return (<section>
        <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 lg:text-4xl text-4xl sm:text-5xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Hello, I'm {" "}</span>
                    <br></br>
                    <TypeAnimation
                        sequence={[
                            'Sukhe',
                            1000,
                            'NUM CS student',
                            1000,
                            'full-stack dev',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    /></h1>
                <p className="text-[#ADB7BE] text-base ms:text-lg lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nam odit, architecto praesentium ad veritatis deserunt exercitationem
                    quisquam facere voluptate. Incidunt vero eius alias praesentium
                    eaque nam sunt amet quod ipsam.
                </p>
                <div>
                    <button className="px-6 py-3 rounded-full mr-4 w-full sm:w-fit bg-gradient-to-r from-green-800 to-green-500 hover:from-green-700 hover:to-green-900 text-white font-bold">Hire Me</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-green-500 to-green-800 text-white mt-3 font-bold">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV </span>
                    </button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mb-6 ml-10 mt-4 lg:mt-2">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/iimg.jpg"
                        alt="hero img"
                        className="rounded-full object-cover w-full h-full"
                        layout="fill"
                    />
                </div>
            </div>
        </div>
    </section>
    )
}

export default HeroSection;