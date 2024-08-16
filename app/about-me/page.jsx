"use client"
import { useEffect, useState } from "react"

export default function About() {
  // const [first, setFirst] = useState("")
  // const [second, setSecond] = useState("")
  // const [third, setThird] = useState("")
  // const [fourth, setFourth] = useState("")
  // const [fifth, setFifth] = useState("")
  // const [sixth, setSixth] = useState("")

  // useEffect(() => {
  //   function Click(num) {
  //     switch (num) {
  //       case "first":
  //         animation("My story starts with lines of code, not lines on a screen . As a computer science student,",setFirst)
  //       break;
  //       case "second":
        
  //       break;
  //       case "third":
        
  //       break;
  //       case "fourth":
        
  //       break;      
  //       case "fifth":
        
  //       break;
  //       case "sixth":
        
  //       break;
          
  //       default:
  //         break;
  //     }
      
  //   }
  //   function animation(text, setter) {
  //     for (let index = 0; index < text.length; index++) {
  //       setter(prevState=>prevState + text[index])
  //       setTimeout(() => {
          
  //       }, 100);
        
  //     }
      
  //   }
  // }, [first])
  

  return (
    <>
      <nav className={`h-[15dvh] flex flex-row justify-center items-center gap-[6%] px-[5%] py-[2%] transition-all duration-[1500ms] delay-[3000ms] -translate-y-10 opacity-5 ${true ? 'visible opacity-95 translate-y-0' : 'invisible'}`}>

        <a href="/" className="h-[50%] mr-auto flex">
          <img className="h-full" src="bubble-gum-womans-head 1.gif" alt="" />
          <img className="h-full" src="Ruta.svg" alt="" />
        </a>

        <a href="">Projects</a>
        <a href="">Experience</a>
        <a className="text-gray-400" href="#">About Me</a>
        <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full border-[1px] hover:shadow-3xl transition-all border-black hover:bg-pink-600">
          Download CV
        </button>
      </nav>
      <div className="h-screen mx-[5%] text-xl mb-[10%] overflow-x-hidden">
        <div id="tilt" className="my-[5%] h-1/3 items-center flex flex-row justify-evenly">
          <p className="w-[30%]">I wasn't always a product designer.<span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>{"My story starts with lines of code, not lines on a screen . As a computer science student"}</span> I spent years diligently learning to code, becoming comfortable in the world of logic and algorithms. </p>
          <div className="h-full bg-center bg-no-repeat bg-[url('../public/bubble-gum-woman-waiting-and-looking-at-hourglass.gif')] w-[25rem] flex">
            <div className="bg-white [clip-path:polygon(46%_0,30%_86%,82%_100%,0_100%,0_0)] w-full h-full"></div>
          </div>
        </div>
        <div id="tilt2" className="my-[5%] h-1/3 items-center flex flex-row-reverse justify-evenly">
          <p className="w-2/5">Then, a twist of fate - a random web development competition. <span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>To my surprise, I emerged victorious, my code solving problems and impressing the judges.  Featured in the college magazine</span> this win sparked something within me. I realized the power of creating not just functionality, but a seamless user experience.
          </p>
          <img className="h-full" src="bubble-gum-prize-cup.png" alt="" />
        </div>
        <div id="tilt" className="my-[5%] h-1/3 items-center flex flex-row justify-evenly">
          <p className="w-2/5">However, my initial foray into the professional world as a frontend developer at a startup wasn't quite the perfect fit. While the technical aspects held some appeal, <span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>I craved a more creative outlet. </span></p>
          <img className="h-full" src="bubble-gum-computer-monitor-with-web-design-programs.gif" alt="" />
        </div>
      </div>
      <div className="h-screen mx-[5%] mt-[5%] text-xl mb-[15%] overflow-x-hidden">
        <div id="tilt2" className="my-[5%] h-1/3 items-center flex flex-row-reverse justify-evenly">
          <p className="w-2/5">Luckily, my colleagues saw what I didn't – a budding designer waiting to bloom.<span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>Their nudge towards frontend design unveiled a world of possibilities, where user interfaces became my canvas.</span>  I dove headfirst, my coding skills a solid foundation for this new artistic pursuit.For a year and a half, I honed my UI design skills, crafting interfaces that were both beautiful and functional.  </p>
          <img className="h-full" src="bubble-gum-sitting-woman-has-a-chat-with-her-boss-on-computer.png" alt="" />
        </div>
        <div id="tilt" className="my-[5%] h-1/3 items-center flex flex-row justify-evenly">
          <p className="w-2/5">But the hunger to learn more, to understand the bigger picture, grew stronger.  That's when I embarked on a <span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>product design bootcamp – an intensive immersion into the entire design process.</span> This intensive experience deepened my knowledge and equipped me with the tools to truly excel. </p>
          <img className="h-full" src="bubble-gum-learning-the-instructions.png" alt="" />
        </div>
        <div id="tilt2" className="my-[5%] h-1/3 items-center flex flex-row-reverse justify-evenly">
          <p className="w-2/5"><span className="font-semibold bg-gradient-to-r from-pink-600 via-pink-500 to-violet-500 text-transparent bg-clip-text animate-gradient" style={{WebkitBackgroundClip: 'text'}}>Now, for over four years, I've been a happy and thriving product designer.</span> My journey may have begun with code, but it's design that truly allows me to create experiences that matter.</p>
          <img className="h-full" src="bubble-gum-woman-remote-working-at-laptop.gif" alt="" />
        </div>
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
  )
}