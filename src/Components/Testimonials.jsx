import React from 'react'
import testimonial from './../assets/img/testimonials.png'
import {testimonials} from './../Constants/index.js'

const Testimonials = () => {
  return (
    <div className="py-5 pt-12 lg:py-10 lg:px-32 ">
    <h4 className="text-center text-4xl lg:pb-8 font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9">
        Avis et Temoignages
    </h4>
    <div className="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        {testimonials.map((item,index)=>(
            <div key={index} className="bg-white  w-80 shadow-lg mx-auto my-5 rounded-xl p-4">
                <p className="text-gray-600 ">
                    <span className="text-4xl font-bold text-blue-500">
                        “
                    </span>
                    {item.message}
                    <span className="text-4xl font-bold text-blue-500">
                        ”
                    </span>
                </p>
                <div className="flex justify-center mt-4 space-x-5">
                    <a href="#" className="relative block">
                        <img alt="profil" src={testimonial}className="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <div className="flex flex-col justify-center ml-2">
                        <span className="text-sm font-semibold text-blue-500">
                            {item.nom}
                        </span>
                        <span className="flex items-center text-xs ">
                            {item.poste}
                        </span>
                    </div>
                    <div className="flex justify-center mt-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                    </div>
                </div>
                
            </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials