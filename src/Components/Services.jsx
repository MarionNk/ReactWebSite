import React from 'react'
import b from './../assets/b.jpg'
import {services} from './../Constants/index.js'

const Services = () => {
  return (
    <div className=" mb-8 py-10">
    
    <div className="mx-5 mb-10 ">
        <h4 className="text-center text-4xl pb-4 font-extrabold leading-8 tracking-tight text-gray-900 sm:leading-9">
            Nos Services
        </h4>
        <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            {services.map((item,index)=>(
                <div key={index} id={item.id} className="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto drop-shadow-xl text-white bg-yellow-300 rounded-full">
                            <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
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