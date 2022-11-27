import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillTwitterSquare,AiOutlineSearch} from 'react-icons/ai'
const Home = () => {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img src="images/mesuem.jpg" alt=""  className="w-full h-full object-cover"/>
      </div>
      <nav className="w-full absolute top-0 p-5 flex justify-between text-white z-10">
        <div>
          <h1 className="text-3xl font-bold">قطر</h1>
        </div>
        <div>
          <ul className="flex space-x-5 text-sm font-bold">
            <li>Doha</li>
            <li>Al Warkah</li>
            <li>Al Rayyan</li>
            <li>All Khor</li>
          </ul>
          <div className="flex items-center space-x-2 mt-5 text-gray-200">
            <AiOutlineSearch/>
            <input
            className="bg-inherit text-xs border-b border-gray-300 outline-0 p-1"
            type="text" placeholder='search' />
          </div>
        </div>
      </nav>
      <div className="absolute top-0 h-screen flex flex-col space-y-10 justify-center items-center bg-black opacity-75 xl:w-1/3 sm:w-1/2 z-0">
        <div className="text-white text-center space-y-5">
          <h2 className="text-2xl font-bold">D I S C O V E R</h2>
          <h1 className="text-5xl font-bold">Q A T A R</h1>
          <p className="mx-10 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam consequatur, necessitatibus dolorem, provident voluptas esse recusandae impedit distinctio laboriosam modi a nulla ratione quaerat?</p>
        </div>
        <div className="space-x-4">
          <button className="bg-white py-2 px-5 rounded-md">Road Map</button>
          <button className="text-white border py-2 px-5">Book a trip</button>
        </div>
        <div className="text-white flex space-x-5">
          <AiFillFacebook size={"2rem"}/>
          <AiFillInstagram size={"2rem"}/>
          <AiFillTwitterSquare size={"2rem"}/>
        </div>
      </div>
    </div>
  )
}

export default Home