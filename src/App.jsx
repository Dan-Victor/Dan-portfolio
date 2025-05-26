import { useState, useEffect, use } from 'react'
import Nav from './nav.jsx'
import './App.css'
import Picture from './assets/dan pic.png'
import sm from './assets/sm.png'
import rccg from './assets/rccg.png'
import uh from './assets/uh.png'
import ac from './assets/ac.png'
import skill from './assets/skill.png'
import Footer from './footer.jsx'
function App() {
   return (    
    <>
    
    
     <Nav />
     <main className='w-full max-w-[1600px] m-auto '>
      <section className='w-full bg-[#000000] flex md:justify-between  flex-wrap md:flex-nowrap px-[10px] items-center pt-[60px] pb-[40px] '>
        <div className='text-white md:pl-[55px] mt-[100px] text-center md:text-left'>
          <h1 className=' bg-gradient-to-b from-[#F5F5F5] via-[#D4D4D4] to-[#9E9E9E] h-auto bg-clip-text
text-transparent xl:text-[48px] text-3xl '>Dan-Victor Adesola</h1>
          <h1 className='xl:text-[48px] text-3xl  w-auto xl:w-[585px] bg-gradient-to-b from-[#F5F5F5] via-[#D4D4D4] to-[#9E9E9E] h-auto bg-clip-text
text-transparent'>FRONTEND DEVELOPER | UI/UX DESIGNER</h1>
           <a href="/Dan-Victor Resume pro.pdf" target='_blank' rel="noopener noreferrer"><button className=' mt-[32px] cursor-pointer
             border-1 border-transparent rounded-[12px]
             bg-gradient-to-r from-[#ffffff] to-[#A42121] bg-clip-border p-[2px]'>
             <div className='bg-black text-white px-[21px] py-[20px] rounded-[12px]'>
               Download Resume
             </div>
           </button></a>
        </div>
        <div className='w-auto  h-auto'>
           <img  src={Picture} alt="Dan Victor" className='object-cover  ' />
        </div>
      </section>
        <h1 className='text-left px-[25px] sm:px-0 sm:text-center text-3xl sm:text-5xl bg-gradient-to-b from-[#F5F5F5] via-[#D4D4D4] to-[#9E9E9E] h-auto bg-clip-text
text-transparent py-12 scroll-mt-20' id='about'>About Me</h1>
        <p className=' text-left md:text-center opacity-75 px-[25px] sm:px-[30px] xl:px-[90px] leading-[30px]'>I'm a creative and detail-oriented Frontend Developer and UI/UX Designer with experience building responsive,
           user-friendly web interfaces using technologies like HTML5, CSS3, Tailwind css, JavaScript, React, and TypeScript. I specialize in translating UI/UX designs
            into clean, scalable code and collaborating across teams to bring digital products to life. Whether working with a start-up, an established company, or a personal client, 
            I focus on crafting functional and visually compelling websites and web apps. From landing pages and full-site builds to API-driven apps and interface designs in Figma,
             I aim to deliver smooth, modern user experiences across all platforms.</p>
             <h1 className=' pt-[160px] md:pt-[300px] text-center  text-3xl sm:text-5xl bg-gradient-to-r from-[#F5F5F5] via-[#D4D4D4] to-[#9E9E9E] h-auto bg-clip-text
text-transparent scroll-mt-[-120px]' id='skill'>Skills & Tools</h1>
             <div className='flex justify-center mt-[80px] px-[10px] items-center'>
              <img src={skill}></img>
             </div>

             <h1 className='text-center pt-[160px]  sm:pt-[300px] text-3xl sm:text-5xl scroll-mt-[-160px] ' id='project'>Projects</h1>
             <div className='grid xl:grid-cols-[repeat(auto-fit,minmax(436px,1fr))] grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-[50px] px-[45px] mt-[100px] mx-auto  items-center justify-items-center'>
              <div>
              <a href="https://frolicking-clafoutis-7ac6ab.netlify.app/"><div><img className='object-contain' src={sm} alt=""></img></div></a>
                <h2 className='pt-[45px] text-3xl pb-1'>Smart Residence</h2>
                <p className='opacity-75 w-[310px] h-[80px]'>A website to help estate owners
                and landlord track estate activites.</p>
            <a href="https://frolicking-clafoutis-7ac6ab.netlify.app/"><button  className=' mt-[32px] cursor-pointer
             border-1 border-transparent rounded-[12px]
             bg-gradient-to-r from-[#ffffff] to-[#A42121] bg-clip-border p-[1px]'>
             <div className='bg-black text-white px-[21px] py-[15px] rounded-[12px]'>
               Live Demo
             </div>
           </button></a>
              </div>

              <div>
              <a href="https://joyful-platypus-3a1eb3.netlify.app/"><div><img className='object-contain' src={rccg} alt=""></img></div></a>
                <h2 className='pt-[45px] text-3xl pb-1'>Rccg City of David</h2>
                <p className='opacity-75 w-[310px] h-[80px]'>Redeemed Christian Church of God, City Of David church website.</p>
            <a href="https://joyful-platypus-3a1eb3.netlify.app/"><button  className=' mt-[32px] cursor-pointer
             border-1 border-transparent rounded-[12px]
             bg-gradient-to-r from-[#ffffff] to-[#A42121] bg-clip-border p-[1px]'>
             <div className='bg-black text-white px-[21px] py-[15px] rounded-[12px]'>
               Live Demo
             </div>
           </button></a>
              </div>
              <div>

              <a href="https://dan-victor.github.io/urban-hive/#"><div><img className='object-contain'  src={uh} alt=""></img></div></a>
                <h2 className='pt-[45px] text-3xl pb-1'>Urban Hive</h2>
                <p className='opacity-75 w-[310px] h-[80px]'>A Software Development Agency website that provides end to end software development services.</p>
            <a href="https://dan-victor.github.io/urban-hive/#"><button  className=' mt-[32px] cursor-pointer
             border-1 border-transparent rounded-[12px]
             bg-gradient-to-r from-[#ffffff] to-[#A42121] bg-clip-border p-[1px]'>
             <div className='bg-black text-white px-[21px] py-[15px] rounded-[12px]'>
               Live Demo
             </div>
           </button></a>
              </div>

              <div>
              <a href="https://precious-macaron-9a60f3.netlify.app/"><div><img className='object-contain' src={ac} alt=""></img></div></a>
                <h2 className='pt-[45px] text-3xl pb-1'>Anncranberry Couture</h2>
                <p className='opacity-75 w-[310px] h-[80px]'>A website to book outfit appointment </p>
            <a href="https://precious-macaron-9a60f3.netlify.app/"><button  className=' mt-[32px] cursor-pointer
             border-1 border-transparent rounded-[12px]
             bg-gradient-to-r from-[#ffffff] to-[#A42121] bg-clip-border p-[1px]'>
             <div className='bg-black text-white px-[21px] py-[15px] rounded-[12px]'>
               Live Demo
             </div>
           </button></a>
              </div>
             </div>
     </main>
     <Footer />
    </>
  )
}

export default App
