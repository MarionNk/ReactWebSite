import React from 'react'
import child from './../assets/img/children-laptop.png'
import girl from './../assets/img/girl.png'
import laptop from './../assets/img/laptop-news.png'

const Team = () => {
  return (
    
        <div className="p-8 bg-white rounded-lg  mt-3">
            <p className="text-5xl font-bold text-center  text-black">
                La Team Studefly
            </p>
            <p className="mb-6 pt-3 text-md font-normal text-center text-gray-600">
                Meet the best team in wolrd
            </p>
            <div className="flex flex-col items-center md:flex-row justify-center">
                <div className="p-4">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <img alt="profil" src={child} className="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-500">
                            Patricia Yang
                        </p>
                        <p className="text-xl font-light  text-gray-800">
                            Developpeuse
                        </p>
                        <p className="max-w-xs py-4 font-light text-md text-gray-400">
                            Patricia Yang, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
                        </p>
                    </div>
                    
                </div>
                <div className="p-4">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <img alt="profil" src={girl} className="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-500">
                            Jeanne Castux
                        </p>
                        <p className="text-xl font-light text-gray-800">
                            CEO
                        </p>
                        <p className="max-w-xs py-4 font-light text-md text-gray-400">
                            Jeanne Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
                        </p>
                    </div>
                    
                </div>
                <div className="p-4">
                    <div className="mb-4 text-center opacity-90">
                        <a href="#" className="relative block">
                            <img alt="profil" src={laptop} className="mx-auto object-cover  h-100 w-60 "/>
                        </a>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold text-indigo-500">
                            Thierry Halliday
                        </p>
                        <p className="text-xl font-light text-gray-800">
                            CTO
                        </p>
                        <p className="max-w-xs py-4 font-light text-md text-gray-400">
                            Thierry Halliday, born November 4, 1993 in Saint hilaire de riez, is css specialist.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

  )
}

export default Team