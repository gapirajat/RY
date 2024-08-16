"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function project() {
  const router = useRouter();

  const goBack = () => {
    console.log(router)
    try {
      router.back();
    } catch (error) {
      window.location.href = "/";

    }
    // This triggers the browser back action
  };

  return (
    <>

      <nav className={`h-[15dvh] flex flex-row justify-center items-center gap-[6%] px-[5%] py-[2%] transition-all duration-[1500ms] delay-[3000ms] opacity-95 translate-y-0 `}>
        <a onClick={goBack} className="h-[50%] mr-auto flex cursor-pointer">
          <img className="h-full" src="bubble-gum-womans-head 1.gif" alt="" />
          <img className="h-full" src="Ruta.svg" alt="" />
        </a>

        <a href="">Projects</a>
        <a href="">Experience</a>
        <a href="">About Me</a>
        <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full border-[1px] hover:shadow-3xl transition-all border-black hover:bg-pink-600">
          Download CV
        </button>
      </nav>
      <svg
      onClick={goBack}
      className="cursor-pointer opacity-30 transition-all duration-700 hover:rotate-90 ml-auto mr-3"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>

      <img className="w-[80%] mx-auto" src="p1.jpeg" alt="" />
      <img className="w-[80%] mx-auto" src="About us.png" alt="" />
      <footer className="h-[45dvh] bg-pink-500 opacity-90 justify-center items-center">
        <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
          <div className="text-white h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
            <p className="font-semibold font-sans text-2xl">I'm grateful for your time and attention</p>

            <p className="text-sm">Email - ruthambara.r.yadav@gmail.com</p>
            <p className="text-sm">Contact - +91 7744857116</p>
            <div className="flex flex-row text-white text-sm w-[70%] items-center justify-between">
              <a href="">LINKEDIN</a>
              <a href="">INSTAGRAM</a>
              <a href="">YOUTUBE</a>
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
