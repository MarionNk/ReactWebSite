import React from 'react'
import studeflygr2 from './../assets/studeflygr2.png'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Soubscribe = () => {
  return (
    <>
    <div className='lg:mt-4 p-4 bg-white flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center'>
            {/* <div  className='flex justify-center'>
                <img src={studeflygr2} className="my-8 w-96 justify-center" alt=""/>
            </div> */}
            <div className="relative px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <h2 className="text-2xl font-bold font-display text-black sm:text-3xl">
                    We&#x27;ve got more coming...
                </h2>
                <p className="mt-2 max-w-md text-base text-gray-500">
                    Want to hear from us when we add new components? Sign up for our newsletter and we&#x27;ll email you every time we release a new batch of components.
                </p>
                <div className="mt-6 flex justify-start">
                    <form className="flex flex-col justify-start max-w-lg space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                    <div className=" relative ">
                        <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base outline-none ring-2 ring-indigo-600 focus:border-transparent" placeholder="Email"/>
                        </div>
                        <button className="flex-shrink-0 w-2/5 px-4 py-2 text-base font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-indigo-200" type="submit">
                            Souscrire
                        </button>
                    </form>
                </div>
            </div>
            <div className="rounded-2xl lg:p-12  bg-white p-2 mx-8">
                <h1 className="text-center text-4xl text-gray-800 mb-8 font-bold ">Questions frequentes</h1>
                
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-bold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-48 md:max-w-md sm:max-w-sm: lg:max-w-lg px-4 pt-4 pb-2 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason, email us
                        within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>

                

                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-bold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>Do you offer technical support?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        No.
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>

                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-bold text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                        <span>What is your refund policy?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-blue-500`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="max-w-48 md:max-w-md sm:max-w-sm: lg:max-w-lg px-4 pt-4 pb-2 text-sm text-gray-500">
                        If you're unhappy with your purchase for any reason, email us
                        within 90 days and we'll refund you in full, no questions asked.
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                
        </div>
    
    </div>
    
    </>

  )
}

export default Soubscribe