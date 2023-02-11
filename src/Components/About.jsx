import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 ">
            <div className="flex flex-wrap -mx-8">
                <div className="w-full px-8 lg:w-1/2">
                    <div className="pb-12 mb-12 border-b lg:mb-0 lg:pb-0 lg:border-b-0">
                        <h2 className="mb-4 text-3xl font-bold lg:text-4xl font-heading ">
                            Sed ac magna sit amet risus tristique interdum.
                        </h2>
                        <p className="mb-8 leading-loose text-gray-500 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.
                        </p>
                        <div className="w-full md:w-1/3">
                            <NavLink to='/apropos' className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    En savoir plus
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="w-full px-8 lg:w-1/2">
                    <ul className="space-y-2">
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    1
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold ">
                                    Responsive Elements
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                    All elements are responsive and provide the best display in all screen size. It&#x27;s magic !
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    2
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold ">
                                    Flexible Team
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                    Flexibility is the key. All team is available 24/24 and joinable every day on our hotline.
                                </p>
                            </div>
                        </li>
                        <li className="flex -mx-4">
                            <div className="px-4">
                                <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                    3
                                </span>
                            </div>
                            <div className="px-4">
                                <h3 className="my-4 text-xl font-semibold ">
                                    Ecologic Software
                                </h3>
                                <p className="leading-loose text-gray-500 ">
                                    Our Software are ecologic and responsable. Green is not just a color, it&#x27;s a way of life.
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