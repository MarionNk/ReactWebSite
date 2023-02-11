import React from 'react'
import child from './../assets/img/children-laptop.png'
import girl from './../assets/img/girl.png'
import laptop from './../assets/img/laptop-news.png'

const Team = () => {
  return (
    
        <div class="p-8 bg-white rounded-lg shadow mt-3">
            <p class="text-5xl font-bold text-center  text-black">
                La Team Studefly
            </p>
            <p class="mb-6 pt-3 text-md font-normal text-center text-gray-600">
                Meet the best team in wolrd
            </p>
            <div class="flex flex-col items-center md:flex-row justify-center">
                <div class="p-4">
                    <div class="mb-4 text-center opacity-90">
                        <a href="#" class="relative block">
                            <img alt="profil" src={child} class="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-2xl font-bold text-indigo-500">
                            Patricia Yang
                        </p>
                        <p class="text-xl font-light  text-gray-800">
                            Developpeuse
                        </p>
                        <p class="max-w-xs py-4 font-light text-md text-gray-400">
                            Patricia Yang, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                        </p>
                    </div>
                    
                </div>
                <div class="p-4">
                    <div class="mb-4 text-center opacity-90">
                        <a href="#" class="relative block">
                            <img alt="profil" src={girl} class="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-2xl font-bold text-indigo-500">
                            Jeanne Castux
                        </p>
                        <p class="text-xl font-light text-gray-800">
                            CEO
                        </p>
                        <p class="max-w-xs py-4 font-light text-md text-gray-400">
                            Jeanne Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
                        </p>
                    </div>
                    
                </div>
                <div class="p-4">
                    <div class="mb-4 text-center opacity-90">
                        <a href="#" class="relative block">
                            <img alt="profil" src={laptop} class="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div class="text-center">
                        <p class="text-2xl font-bold text-indigo-500">
                            Thierry Halliday
                        </p>
                        <p class="text-xl font-light text-gray-800">
                            CTO
                        </p>
                        <p class="max-w-xs py-4 font-light text-md text-gray-400">
                            Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

  )
}

export default Team