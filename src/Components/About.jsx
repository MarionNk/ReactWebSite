import React from 'react'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../Constants'

const About = () => {
  return (
    <section>
        <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 ">
            <div className="flex flex-wrap -mx-8">
                <div className="w-full px-8 lg:w-1/2">
                    <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                        <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading ">
                            En quelques etapes seulement
                        </h2>
                        <p className="mb-8 leading-loose text-gray-500 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                        </p>
                        <div className="w-full md:w-1/3">
                            <NavLink to='/apropos' className="py-4 px-6 text-lg  bg-blue-900 hover:bg-blue-900 focus:ring-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    En savoir plus
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <ul className="space-y-2">
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-8 h-8 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    1
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-1 text-xl font-semibold ">
                                    Etape 1
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. corrupti nemo! Accusantium?
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-8 h-8 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    2
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-1 text-xl font-semibold ">
                                    Etape 2
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero officiis debitis? Voluptatem, dignissimos facere? Impedi.
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-8 h-8 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    3
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-1 text-xl font-semibold ">
                                    Etape 3
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                    ex autem voluptatibus a aliquid minus repellat saepe quam dignissimos?    
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  )
}

export default About