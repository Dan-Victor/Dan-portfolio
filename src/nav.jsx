import React from 'react'

const Nav = () => {
  return (
    <header className="w-full flex bg-[rgb(0,0,0)] h-[80px] justify-between items-center px-[15px] sm:px-[30px] md:px-[55px] fixed z-[999]">
     <a href="/"><h1 className='text-[32px] font-[900] '>DAN</h1></a>
    <nav className='w-auto'>
       
        <ul className='sm:flex hidden sm:gap-[40px] lg:gap-[109px]'>
            <a href="/"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#skill"><li>Skill</li></a>
            <a href="#project"><li>Project</li></a>
        </ul>
    </nav>
    <a href='mailto:victoradesola8@gmail.com'><button className=' text-white border-white border-[1px] border-solid px-[25px] py-[10px] sm:py-[15px] cursor-pointer hover:text-black hover:bg-white sm:px-[40px] rounded-[12px]'>Contact</button></a>
   </header>
  )
}

export default Nav