import React from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  return (
    <div className='w-full h-screen  bg-black flex'>
      <div className="left w-[35%] h-full p-10 relative">
        <h1 className='text-white font-semibold uppercase text-center text-4xl tracking-wide'>Portofilo</h1>
        <div className="dotted w-[60%] h-[30%] text-xs absolute left-0 top-36 flex gap-4 text-zinc-500/10 flex-wrap">
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        <i class="ri-circle-fill"></i>
        </div>
        <div className='text-white absolute bottom-36 -right-14'>
          <h1 className='text-5xl font-thin'>MY NAME IS </h1>
          <h2 className="text-5xl font-semibold mb-4">ABDULRAHMAN</h2>
          <button className='uppercase px-4 py-2 hover:bg-yellow-600 bg-yellow-500 text-black font-bold'>I'M a frontend developer</button>
        </div>
      </div>
      <div className="left overflow-hidden w-[65%] h-full bg-zinc-600">
        <div className="navbar font-semibold text-white w-full px-4 py-5 flex items-center justify-center gap-7 bg-zinc-800">
          <h4>HOME</h4>
          <h4>ABOUT</h4>
          <h4>WORKS</h4>
          <h4>BLOGS</h4>
          <h4>CONTACT</h4>
        </div>
        <img className='w-full h-full object-container' src="https://images.unsplash.com/photo-1529977538620-7832bad2cacf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default App