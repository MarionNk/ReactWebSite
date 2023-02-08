import React from 'react'
import testimonial from './../assets/img/testimonials.png'
import {testimonials} from './../Constants/index.js'

const Testimonials = () => {
  return (
    <div className="py-5 pt-12 lg:py-10 lg:px-32 ">
    <h4 class="text-center text-4xl pb-4 font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
        Avis et Temoignages
    </h4>
    <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
        {testimonials.map((item)=>(
            <div class="bg-white dark:bg-gray-800 w-80 shadow-lg mx-auto my-5 rounded-xl p-4">
                <p class="text-gray-600 dark:text-white">
                    <span class="text-4xl font-bold text-blue-500">
                        “
                    </span>
                    {item.message}
                    <span class="text-4xl font-bold text-blue-500">
                        ”
                    </span>
                </p>
                <div class="flex justify-center mt-4 space-x-5">
                    <a href="#" class="relative block">
                        <img alt="profil" src={testimonial}class="mx-auto object-cover rounded-full h-10 w-10 "/>
                    </a>
                    <div class="flex flex-col justify-center ml-2">
                        <span class="text-sm font-semibold text-blue-500">
                            {item.nom}
                        </span>
                        <span class="flex items-center text-xs dark:text-gray-400">
                            {item.poste}
                        </span>
                    </div>
                    <div class="flex justify-center mt-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                            <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
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