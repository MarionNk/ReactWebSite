import React from 'react'
import b from './../assets/b.jpg'
import {services} from './../Constants/index.js'

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
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services