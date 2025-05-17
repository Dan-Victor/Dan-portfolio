import React from 'react'
import github from '/github.png'
import linkedin from '/linkedin.png'
import twitter from '/twitter.png'
import whatsapp from '/whatsapp.png'
const Footer = () => {
    const linkedInUrl = "https://www.linkedin.com/in/dan-victor-adesola-717bb5299/"
  return (
    <>
    <footer className="w-full bg-[#560909] mt-[100px]">
        <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]  gap-[50px] mx-auto pl-[55px] lg:pl-[150px] items-start justify-items-left  pt-[69px]'>
    <div>
        <h1 className='text-[30px]'>Contact</h1>
        <p className='opacity-75 pt-[30px]'>Email</p>
        <p className='opacity-75'>victoradesola8@gmail.com</p>
        <p className='opacity-75 pt-[30px]'>Phone Number</p>
        <p className='opacity-75'>+234 8080476742</p>
    </div>
    <div>
        <h1 className='text-[30px]'>Useful Links</h1>
        <a href='#project'><p className='opacity-75 pt-[30px] cursor-pointer hover:opacity-100'>Projects</p></a>
        <a href='#skill'><p className='opacity-75 pt-[30px] cursor-pointer hover:opacity-100'>Skills</p></a>
        <a href='#about'><p className='opacity-75 pt-[30px] cursor-pointer hover:opacity-100'>About</p></a>
       
    </div>
    <div>
        <h1 className='text-[30px]'>Socials</h1>
         <div className='flex gap-[10px] pt-[30px]'>
            <a href="https://github.com/dan-victor" rel="noopener noreferrer" target='_blank'><img src={github} alt="" className='w-[25px] h-[25px] ' /></a>
            <a href={linkedInUrl}  target='_blank'>< img src={linkedin} alt="linkedIn" className='w-[25px] h-[25px]'/></a>
            <a href="https://x.com/dn_vico" rel="noopener noreferrer" target='_blank' ><img src={twitter} alt="twitter" className='w-[25px] h-[25px]'/></a>
            <a href="https://wa.me/+2348080476742" rel="noopener noreferrer" target='_blank'><img src={whatsapp} alt="whatsapp" className='w-[25px] h-[25px]'/></a>
         </div>

        </div>
        </div>
        <hr className='opacity-75 w-[80%] mx-auto mt-[48px]'/>
       
            <p className='text-white  text-center opacity-75 py-[30px]' >DAN | &copy; 2025</p>
    </footer>
    </>
  )
}

export default Footer