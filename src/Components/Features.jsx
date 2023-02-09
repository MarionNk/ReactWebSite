import React from 'react'
import informaticienne from './../assets/img/laptop-news.png'
import informaticien from './../assets/img/Rectangle 19.png'
import studeflygr2 from './../assets/img/Rectangle 21.png'
import search from './../assets/img/girl-laptop.png'

const Features = () => {
  return (
    
    <div className="my-32 mx-5 relative max-w-screen-xl p-4 px-4 bg-white  sm:px-6 lg:px-8 py-26 lg:mt-32">
        <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                    <p className="text-xl font-bold leading-6 text-indigo-500 uppercase">
                        Interactive
                    </p>
                    <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900  sm:text-3xl sm:leading-9">
                        La cohesion au sein de notre group est la cle de notre succes.
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-500 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe cum natus nostrum, libero sequi quod eum hic doloribus expedita facilis deleniti harum, voluptates vel blanditiis? Velit laborum sequi recusandae.
                    </p>
                    <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">{/* {dark:text-green-500 drark:bg-transparent} */}
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                                    modifications
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">{/* dark:text-green-500 drark:bg-transparent */}
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">
                                    fiabilite
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">{/* dark:text-green-500 drark:bg-transparent */}
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">{/* dark:text-gray-200 */}
                                    support 24h/24 
                                </span>
                            </div>
                        </li>
                        <li className="mt-6 lg:mt-0">
                            <div className="flex">
                                <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">{/* dark:text-green-500 drark:bg-transparent */}
                                    <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span className="ml-4 text-base font-medium leading-6 text-gray-500 ">{/* dark:text-gray-200 */}
                                    Assistance
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="relative mt-10 lg:ml-10 relative-20 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                        <div className="flex items-end justify-center space-x-4 lg:justify-start">
                            <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={informaticien} alt="1"/>
                            <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src={informaticienne} alt="2"/>
                        </div>
                        <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                            <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src={search} alt="3"/>
                            <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src={studeflygr2} alt="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Features