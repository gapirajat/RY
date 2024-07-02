"use client";
import useTypewriter from "@/hooks/typewriter";
import useIntersectionObserver from "@/hooks/useMultipleIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Home() {
  // const [modal, setModal] = useState(0);
  const words = ["Product designer", "UI/UX developer"];
  const typewriterText = useTypewriter(words);


  const [ref, isIntersecting] = useIntersectionObserver({
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the target is visible
  });



  return (
    <>
          {/* {modal==3 && <div className="fixed w-full h-full z-40 flex"><div className="absolute top-0 h-[100%] w-[100%] opacity-50 bg-black -z-[10] cursor-pointer " onClick={()=>setModal(0)} ></div><div className="h-[80%] w-[80%] mx-auto mt-auto mb-[2%] overflow-y-scroll z-[500]"><img className="overflow-scroll" src="p1.jpeg" alt=""/></div></div>} */}
    <div className="h-[3dvh] bg-red-600 text-white text-sm pl-[47%] ">Under development 🛠️</div>
      <nav className={`h-[15dvh] flex flex-row justify-center items-center gap-[6%] px-[5%] py-[2%] transition-all duration-[1500ms] delay-[3000ms] -translate-y-10 opacity-5 ${isIntersecting ? 'visible opacity-95 translate-y-0' : 'invisible'}`}>
        
        <a href="/" className="h-[50%] mr-auto flex">
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
      <div ref={ref} className="h-[70dvh] flex flex-col items-center relative">
        <div className="flex flex-col w-fit ml-[5%] mt-[5%]">
          <span
            className={`text-8xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 text-transparent bg-clip-text bg-300% animate-gradient opacity-0 transition-all delay-1000 duration-[2000ms] -translate-y-10  ${isIntersecting ? 'visible opacity-[95%] translate-y-[0]' : ''}`} style={{WebkitBackgroundClip: 'text'}}>
            RUTAMBHARA
          </span>
          <MyComponent isIntersecting={isIntersecting} />
        </div>
        <img className="absolute h-[85%] bottom-[35%] top-[1%]" src="bubble-gum-woman-remote-working-at-laptop.gif" alt="" />
        <div className={`absolute right-[35%] bottom-[23%] h-[23%] opacity-0 transition-all delay-[1500ms] duration-[2000ms]  ${isIntersecting?'opacity-80':'translate-x-[3rem]'}`}>
          <img className={`h-full `} src="Group 143726405 (1).png" alt="" />
          {/* <p id="tt" className="absolute w-[4rem] top-[50%] left-[20%] rotate-[21deg] font-sans text-[0.7rem] text-wrap">{typewriterText}</p> */}
        </div>
        <button className={`absolute bottom-[2%] bg-pink-500 text-white font-semibold py-2 px-8 rounded-full border-[1px]  transition-all hover:bg-pink-600 opacity-0 duration-[2000ms] delay-[3000ms] ${isIntersecting?'opacity-[95%] -translate-y-[2rem]':'translate-y-[4rem]'}`}>
          Reach out
        </button>
      </div>


      <div className="h-[80dvh] flex flex-col w-full items-center">
        <div className="h-[50%] w-[70%] relative">
          <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center shadow-2xl drop-shadow-2xl">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-center">
              <p className="m-[3%]">              I have a total <span className="font-bold text-nowrap h-fit">4.5 years</span> of experience creating user friendly experiences and interactive visuals for all kind of users. I like merging creativity with the purpose.</p>

            </div>
          </div>

        </div>

        <div id="moving-grid" className="w-full h-full flex font-medium flex-col justify-center items-center opacity-90 gap-[5%]">
          Delivered sucessful projects for :
          <div className="flex opacity-100 gap-[5%]">
            <img src="Metafic.svg" alt="" />
            <img src="relata.io.svg" alt="" />
            <img src="Shasannama News.svg" alt="" />
          </div>


        </div>
      </div>
      <div className="h-[200dvh] pb-[8%] bg-pink-50 opacity-90 flex flex-col items-center">
        <span
          className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient p-[3%] mt-[7%]"  style={{WebkitBackgroundClip: 'text'}}>
          Projects & Case Studies
        </span>
        <Link className={`h-[20%] w-[70%]  mt-[4%] transition-all relative`} href="project">        

          <div className={`pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center hover:scale-[110%] cursor-pointer transition-all`}>
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-start">
              <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                <div className="text-black h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                  <p className="font-semibold font-sans text-2xl">Case Study Headline</p>

                  <p className="text-sm">Case Study Category</p>
                  <p className="text-sm">Here you can add some meta description about your case study like what are the research methods used</p>
                </div>
                <img className="w-[50%] h-[75%]" src="Rectangle 39460.png" alt="" />
              </div>
            </div>
          </div>        
        </Link>



        <Link className={`h-[20%] w-[70%]  mt-[4%] transition-all relative`} href="project"> 
        <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center hover:scale-[110%] cursor-pointer transition-all">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-start">
              <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                <div className="text-black h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                  <p className="font-semibold font-sans text-2xl">Case Study Headline</p>

                  <p className="text-sm">Case Study Category</p>
                  <p className="text-sm">Here you can add some meta description about your case study like what are the research methods used</p>
                </div>
                <img className="w-[50%] h-[75%]" src="Rectangle 39460 (1).png" alt="" />
              </div>
            </div>
          </div>

        </Link>
        <Link className={`h-[20%] w-[70%]  mt-[4%] transition-all relative`} href="project"> 
        <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center hover:scale-[110%] cursor-pointer transition-all" onClick={()=>{setModal(3)}}>

            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-start">
              <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                <div className="text-black h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                  <p className="font-semibold font-sans text-2xl">Case Study Headline</p>

                  <p className="text-sm">Case Study Category</p>
                  <p className="text-sm">Here you can add some meta description about your case study like what are the research methods used</p>
                </div>
                <img className="w-[50%] h-[75%]" src="Rectangle 39460 (copy 1).png" alt="" />
              </div>
            </div>
          </div>

        </Link>
        <p className="ml-auto flex flex-row justify-center items-center opacity-35 mt-[2%] mr-[15%] hover:opacity-60 cursor-pointer">View All <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <line x1="10" y1="50" x2="70" y2="50" stroke="black" stroke-width="5" />
          <line x1="50" y1="30" x2="70" y2="50" stroke="black" stroke-width="5" />
          <line x1="50" y1="70" x2="70" y2="50" stroke="black" stroke-width="5" />
        </svg></p>
      </div>
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
  );
}

function MyComponent(isIntersecting) {
  return (
    <svg className={`scale-100 ml-auto -mr-[7%] ${isIntersecting?'':''}`} width="271" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path id="myPath" d="m57.17 2.92.9-1.5H39.94l-.29.5-9.48 16.64h-.03L20.66 1.92l-.29-.5H2.24l.9 1.5 18.47 31.14V49h17.04V34.1L57.17 2.92Zm31.9 45.4.23.68H106.97l-.5-1.35L89.72 2.07l-.24-.66H67l-.23.66L50 47.65 49.5 49H67.2l.22-.68 1.78-5.34h18.1l1.78 5.34Zm22.85-.32v1h23.9c9.45 0 16.02-2.48 20.21-6.8 4.2-4.31 5.86-10.3 5.86-17 0-6.71-1.66-12.7-5.86-17.01-4.2-4.32-10.76-6.78-20.2-6.78h-23.91V48Zm89.64.32.23.68H219.46l-.5-1.35L202.2 2.07l-.24-.66H179.5l-.24.66-16.76 45.58L162 49h17.68l.22-.68 1.78-5.34h18.1l1.78 5.34Zm27.18.02.24.66h22.45l.24-.66 16.77-45.58.5-1.35h-17.67l-.23.68-10.73 30.8h-.21l-10.73-30.8-.23-.68h-17.67l.5 1.35 16.77 45.58ZM82.94 29.85h-9.39l4.11-12.33h1.16l4.11 12.33Zm61.87-4.64c0 3.44-.98 5.7-2.48 7.1-1.52 1.4-3.73 2.1-6.5 2.1H129V16h6.81c2.78 0 5 .68 6.51 2.08 1.5 1.4 2.48 3.64 2.48 7.12Zm50.61 4.64h-9.38l4.11-12.33h1.16l4.11 12.33Z" stroke="url(#a)" stroke-width="2" />
      <defs >
        <linearGradient id="a" x1="4" y1="17" x2="268" y2="17" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FF5C9D" />
          <stop offset="1" stop-color="#D83BFF" />
        </linearGradient>
      </defs>
    </svg>



  );
}

