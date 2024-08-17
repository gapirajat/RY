"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function experience() {
    const [load, setload] = useState(false)
    useEffect(() => {
        setload(true)
    }, [])

    return (
        <>
            <nav className={`h-[15dvh] flex flex-row justify-center items-center gap-[6%] px-[5%] py-[2%] transition-all duration-[1500ms] delay-[3000ms] opacity-95 translate-y-0 `}>
                <a href="/" className="h-[50%] mr-auto flex cursor-pointer">
                    <img className="h-full" src="bubble-gum-womans-head 1.gif" alt="" />
                    <img className="h-full" src="Ruta.svg" alt="" />
                </a>

                <a href="">Projects</a>
                <a className="text-gray-400" href="#">Experience</a>
                <a href="about-me">About Me</a>
                <Link href="https://docs.google.com/document/d/1QcZgLCcauW2k1cIC9JcGQFAIfrszyIE2/edit" className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full border-[1px] hover:shadow-3xl transition-all border-black hover:bg-pink-600">
                    Download CV
                </Link>
            </nav>
            <div className="h-screen flex flex-col items-center justify-start">
                <div className="h-[17%] w-[80%] relative m-[1%] delay-1000">
                    <div className="pt-[2.2px] pb-[2.2px] px-[2.5px] h-full w-full overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
                        <div className=" overflow-hidden bg-white h-full w-full justify-center items-start flex flex-col text-center">
                            <span
                                className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient px-[3%] mb-[1%]" style={{ WebkitBackgroundClip: 'text' }}>
                                UX/UI Designer
                            </span>
                            <div className="w-full flex flex-row justify-between px-[3%]">
                                <p>Metafic, Banglore</p><p className="text-gray-400">Sept 23 - Current</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full -z-10 top-[0.3rem] left-[0.3rem] border-[0.15rem] border-gray-300"></div>
                </div>
                <div className={`h-[17%] w-[80%] relative m-[1%] delay-1000 transition-all duration-500 ${load == true ? '-translate-y-[0px]' : '-translate-y-[130%]'}`}>
                    <div className="pt-[2.2px] pb-[2.2px] px-[2.5px] h-full w-full overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
                    <div className=" overflow-hidden bg-white h-full w-full justify-center items-start flex flex-col text-center">
                            <span
                                className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient px-[3%] mb-[1%]" style={{ WebkitBackgroundClip: 'text' }}>
                                Product Designer
                            </span>
                            <div className="w-full flex flex-row justify-between px-[3%]">
                                <p>Freelance</p><p className="text-gray-400">Jan 22 - Aug 22</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full -z-10 top-[0.3rem] left-[0.3rem] border-[0.15rem] border-gray-300"></div>
                </div>
                <div className={`h-[17%] w-[80%] relative m-[1%] delay-1000 transition-all duration-500 ${load == true ? '-translate-y-[0px]' : '-translate-y-[230%]'}`}>
                    <div className="pt-[2.2px] pb-[2.2px] px-[2.5px] h-full w-full overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
                    <div className=" overflow-hidden bg-white h-full w-full justify-center items-start flex flex-col text-center">
                            <span
                                className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient px-[3%] mb-[1%]" style={{ WebkitBackgroundClip: 'text' }}>
                                UX/UI Designer
                            </span>
                            <div className="w-full flex flex-row justify-between px-[3%]">
                                <p>Relata, Pune</p><p className="text-gray-400">Jan 21 - Dec 21</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full -z-10 top-[0.3rem] left-[0.3rem] border-[0.15rem] border-gray-300"></div>
                </div>
                <div className={`h-[17%] w-[80%] relative m-[1%] delay-1000 transition-all duration-500 ${load == true ? '-translate-y-[0px]' : '-translate-y-[330%]'}`}>
                    <div className="pt-[2.2px] pb-[2.2px] px-[2.5px] h-full w-full overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
                    <div className=" overflow-hidden bg-white h-full w-full justify-center items-start flex flex-col text-center">
                            <span
                                className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient px-[3%] mb-[1%]" style={{ WebkitBackgroundClip: 'text' }}>
                                UI Designer
                            </span>
                            <div className="w-full flex flex-row justify-between px-[3%]">
                                <p>Shasannama news, Pune</p><p className="text-gray-400">July 19 - Nov 20</p>
                            </div>
                        </div>
                    </div>
                    <div className="absolute w-full h-full -z-10 top-[0.3rem] left-[0.3rem] border-[0.15rem] border-gray-300"></div>
                </div>

            </div>
            <footer className="h-[45dvh] bg-pink-500 opacity-90 justify-center items-center">

                <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                    <div className="text-white h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                        <p className="font-semibold font-sans text-2xl">I'm grateful for your time and attention</p>

                        <p className="text-sm">Email - ruthambara.r.yadav@gmail.com</p>
                        <p className="text-sm">Contact - +91 7744857116</p>
                        <div className="flex flex-row text-white text-sm w-[70%] items-center justify-between">
                            <a href="https://www.linkedin.com/in/rutambhara-yadav-ab6358192/">LINKEDIN</a>
                            <a href="https://www.instagram.com/rutambhara.yadav/">INSTAGRAM</a>
                            <a href="https://www.youtube.com/@rutambhara.Yadav.">YOUTUBE</a>
                        </div>
                    </div>
                    <img className="h-[170%] mb-[10%] " src="bubble-gum-woman-waiting-and-looking-at-hourglass.gif" alt="" />


                </div>

                <div className="h-[20%] bg-pink-600 opacity-50">

                </div>
            </footer>

        </>
    )
}
