import React from 'react'
import { NavLink } from 'react-router-dom'
import b from './../assets/b.jpg'
import {navlinks, services} from './../Constants/index.js'

const Services = () => {
  return (
    <div className=" mb-0 py-6">
    
    <div className="mx-5 mb-10 ">
        <h4 className="text-center text-4xl pb-4 font-extrabold leading-8 tracking-tight text-gray-900 sm:leading-9">
            Nos Services
        </h4>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            {services.map((item,index)=>(
                <div key={index} id={item.id} className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto drop-shadow-xl text-white bg-yellow-300 rounded-full">
                            <img className='w-8' src={item.link}/>
                        </div>
                    </div>
                    <h3 className="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
                        {item.title}
                    </h3>
                    <p className="py-4 text-gray-500 text-md ">
                        {item.detail}
                    </p>
                    <NavLink to={navlinks[2].link} className="py-0 px-6 text-lg  ">
                        <div className="flex items-center justify-center w-7 h-7 mx-auto drop-shadow-xl text-white bg-gray-800 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" clipRule="evenodd" />
                        </svg>

                        </div>
                    </NavLink>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services