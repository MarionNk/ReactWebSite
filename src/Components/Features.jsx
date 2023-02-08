import React from 'react'
import informaticienne from './../assets/img/laptop-news.png'
import informaticien from './../assets/img/Rectangle 19.png'
import studeflygr2 from './../assets/img/Rectangle 21.png'
import search from './../assets/img/girl-laptop.png'

const Features = () => {
  return (
    
    <div class="my-16 mx-5 relative max-w-screen-xl p-4 px-4 bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div class="relative">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
                    <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                        Interactive
                    </p>
                    <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                        La cohesion au sein de notre group est la cle de notre succes.
                    </h4>
                    <p class="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores saepe cum natus nostrum, libero sequi quod eum hic doloribus expedita facilis deleniti harum, voluptates vel blanditiis? Velit laborum sequi recusandae.
                    </p>
                    <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                        <li class="mt-6 lg:mt-0">
                            <div class="flex">
                                <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                    modifications
                                </span>
                            </div>
                        </li>
                        <li class="mt-6 lg:mt-0">
                            <div class="flex">
                                <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                    fiabilite
                                </span>
                            </div>
                        </li>
                        <li class="mt-6 lg:mt-0">
                            <div class="flex">
                                <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                    support 24h/24 
                                </span>
                            </div>
                        </li>
                        <li class="mt-6 lg:mt-0">
                            <div class="flex">
                                <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                    <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>
                                <span class="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                    Assistance
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="relative mt-10 lg:ml-10 relative-20 lg:mt-0 lg:col-start-1">
                    <div class="relative space-y-4">
                        <div class="flex items-end justify-center space-x-4 lg:justify-start">
                            <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={informaticien} alt="1"/>
                            <img class="w-40 rounded-lg shadow-lg md:w-64" width="260" src={informaticienne} alt="2"/>
                        </div>
                        <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                            <img class="w-24 rounded-lg shadow-lg md:w-40" width="170" src={search} alt="3"/>
                            <img class="w-32 rounded-lg shadow-lg md:w-56" width="200" src={studeflygr2} alt="4"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Features