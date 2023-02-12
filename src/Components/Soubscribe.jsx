import React from 'react'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../Constants'
import studeflygr2 from './../assets/studeflygr2.png'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Soubscribe = () => {
  return (
    <>
    <div className="container px-6 py-5 mx-auto lg:ml-24">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">Souscris a notre <span className="text-blue-500">Newsletter</span></h1>

                    <p className="mt-3 text-gray-600 ">Sois la premiere personne informé des <span className="font-medium text-blue-500">nouveautés</span> chez studefly</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md  border-gray-300  focus:border-blue-200 " placeholder="Address email"/>

                        <NavLink to={navlinks[3].link} className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            Souscrire
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                <img className="w-full h-full max-w-md" src="https://merakiui.com/images/components/Email-campaign-bro.svg" alt="email illustration vector art"/>
            </div>
        </div>
    </div>
    
    </>

  )
}

export default Soubscribe