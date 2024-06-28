"use client"
import useTypewriter from "@/hooks/typewriter";
import Image from "next/image";

export default function Home() {
  const words = ["Epsitek dasdasdsd", "Expertise"];
  const typewriterText = useTypewriter(words);
  return (
    <>
      <nav className="h-[15dvh] flex flex-row justify-center items-center gap-[6%] px-[5%] py-[2%]">
        <a href="#" className="h-[50%] mr-auto flex">
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
      <div className="h-[75dvh] flex flex-col items-center relative">
        <div className="flex flex-col w-fit ml-[5%] mt-[7%]">
          <span
            className="text-7xl font-bold bg-gradient-to-r from-violet-500 via-pink-500 to-violet-500 text-transparent bg-clip-text bg-300% animate-gradient"
          >
            RUTAMBHARA
          </span>
          <MyComponent />
        </div>
        <img className="absolute" src="bubble-gum-woman-remote-working-at-laptop.gif" alt="" />
        <div className="absolute right-[32%] bottom-[23%] h-[23%] opacity-60">
          <img className="h-full" src="Vector 1.svg" alt="" />
          <p className="absolute w-[4rem] top-[50%] left-[20%] rotate-[21deg] font-sans text-sm text-wrap">{typewriterText}</p>
        </div>
        <button className="absolute bottom-[2%] bg-pink-500 text-white font-semibold py-2 rounded-full border-[1px]  transition-all hover:bg-pink-600 px-[5%]">
          Reach out
        </button>
      </div>


      <div className="h-[100dvh] flex flex-col w-full items-center">
        <div className="h-[40%] w-[70%] mb-[7%] relative">
          <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center  mt-[10%] shadow-2xl drop-shadow-2xl">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-center">
              <p className="m-[3%]">              I have a total <span className="font-bold text-nowrap h-fit">4.5 years</span> of experience creating user friendly experiences and interactive visuals for all kind of users. I like merging creativity with the purpose.</p>

            </div>
            <p className="absolute mt-[10%] z-20">            </p>
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
      <div className="h-[200dvh] pb-[4%] bg-pink-50 opacity-90 flex flex-col items-center">
        <span
          className="text-[1.7rem] font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient p-[3%] mt-[7%]"
        >
          Projects & Case Studies
        </span>
        <div className="h-[20%] w-[70%] relative mt-[4%]">
          <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
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

        </div>
        <div className="h-[20%] w-[70%] relative mt-[4%]">
          <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-center">
              <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                <div className="text-black h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                  <p className="font-semibold font-sans text-2xl">I'm grateful for your time and attention</p>

                  <p className="text-sm">Email - ruthambara.r.yadav@gmail.com</p>
                  <p className="text-sm">Contact - +91 7744857116</p>
                </div>
                <img className="h-[170%] mb-[10%] " src="bubble-gum-woman-waiting-and-looking-at-hourglass.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="h-[20%] w-[70%] relative mt-[4%]">
          <div className="pt-[1.7px] pb-[2.2px] px-[1.7px] h-full w-full rounded-[2rem] overflow-hidden bg-gradient-to-r from-red-300 to-purple-300 flex justify-center items-center">
            <div className="rounded-[2rem] overflow-hidden bg-gradient-to-r from-pink-50 to-purple-200 h-full w-full justify-center items-center flex text-center">
              <div className="flex flex-row h-[80%] justify-between mx-[10%] items-center">
                <div className="text-black h-full w-[50%] flex flex-col justify-center items-start gap-[3%]">
                  <p className="font-semibold font-sans text-2xl">I'm grateful for your time and attention</p>

                  <p className="text-sm">Email - ruthambara.r.yadav@gmail.com</p>
                  <p className="text-sm">Contact - +91 7744857116</p>
                </div>
                <img className="h-[170%] mb-[10%] " src="bubble-gum-woman-waiting-and-looking-at-hourglass.gif" alt="" />
              </div>
            </div>
          </div>

        </div>
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

function MyComponent() {
  return (
    <svg className="scale-75 ml-auto -mr-[10%]" width="271" height="50" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function SVG1() {
  return (
    <>
      <svg className="absolute" width="116" height="66" viewBox="0 0 116 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="designer" d="M95.3661 44.9588C95.2492 45.9088 94.5923 46.785 93.3956 47.5874C92.2153 48.3769 90.4556 48.9912 88.1165 49.4303C88.1147 49.445 88.112 49.4669 88.1084 49.4961C88.049 49.9785 88.0598 50.373 88.1408 50.6797C88.2235 50.9718 88.4622 51.1421 88.8569 51.1907C89.4415 51.2627 90.1135 51.1673 90.8729 50.9047C91.6487 50.6292 92.4581 50.2615 93.3011 49.8014C94.1606 49.3285 95.0017 48.8237 95.8245 48.2869C96.6473 47.7502 97.4071 47.2428 98.104 46.7647C98.8172 46.2738 99.4147 45.88 99.8964 45.5831C100.394 45.2735 100.717 45.1277 100.863 45.1457C101.17 45.1835 101.411 45.3319 101.587 45.5909C101.777 45.8518 101.844 46.216 101.786 46.6838C101.754 46.9469 101.701 47.2593 101.626 47.6211C102.406 46.5894 103.264 45.7677 104.2 45.1558C105.138 44.5293 106.037 44.0911 106.899 43.841C107.777 43.5782 108.509 43.4827 109.093 43.5547C109.751 43.6356 110.181 43.822 110.382 44.1139C110.585 44.3912 110.67 44.6687 110.636 44.9464C110.616 45.1072 110.56 45.2634 110.467 45.4152C110.39 45.5542 110.21 45.6952 109.925 45.8382C109.655 45.983 109.213 46.1364 108.6 46.2983C107.789 46.4952 107.009 46.7479 106.259 47.0562C105.523 47.3663 104.821 47.8288 104.151 48.4438C103.499 49.046 102.868 49.8883 102.26 50.9708C101.669 52.0405 101.11 53.4408 100.586 55.1716C100.422 55.6559 100.22 55.9723 99.9793 56.1207C99.7367 56.2838 99.4692 56.3473 99.1769 56.3113C99.1476 56.3077 99.0965 56.3014 99.0234 56.2924C98.8901 56.2908 98.753 56.2591 98.6122 56.1973C98.4843 56.1519 98.368 56.0114 98.2635 55.776C98.1717 55.557 98.1208 55.1872 98.1107 54.6666C98.1006 54.1461 98.154 53.4107 98.2709 52.4607C98.3411 51.8906 98.4367 51.2941 98.558 50.671C98.6956 50.035 98.8505 49.379 99.0228 48.7028C98.1874 49.3419 97.2999 49.982 96.3604 50.6231C95.4209 51.2642 94.4594 51.8432 93.4758 52.3601C92.5087 52.8643 91.5705 53.2533 90.6614 53.5272C89.7669 53.8029 88.9542 53.8957 88.2234 53.8058C87.2441 53.6853 86.4789 53.2721 85.9277 52.5662C85.393 51.8475 85.2075 50.8232 85.3712 49.4931C85.5331 48.1776 85.8551 47.008 86.3373 45.9841C86.8358 44.9475 87.4177 44.0769 88.0831 43.3724C88.7485 42.6679 89.428 42.1506 90.1214 41.8205C90.8314 41.4776 91.4713 41.3412 92.0414 41.4114C93.2545 41.5607 94.1394 41.9664 94.6959 42.6284C95.2542 43.2758 95.4776 44.0526 95.3661 44.9588ZM88.6417 47.5141C89.0451 47.3709 89.474 47.2011 89.9285 47.0048C90.3994 46.7957 90.8419 46.5757 91.2561 46.3447C91.6721 46.0992 92.0141 45.8519 92.2822 45.603C92.5648 45.3559 92.7214 45.1081 92.752 44.8596C92.8024 44.4504 92.7161 44.1875 92.493 44.071C92.2863 43.9417 91.993 43.8537 91.613 43.8069C91.2183 43.7583 90.8341 43.9262 90.4604 44.3105C90.0885 44.6802 89.7478 45.1575 89.4384 45.7426C89.129 46.3277 88.8634 46.9182 88.6417 47.5141Z" stroke="black" stroke-width="2" stroke-linecap="round" />
      </svg>


    </>
  );
}
