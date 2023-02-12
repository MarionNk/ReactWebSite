import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logoStudefly from './../assets/logoStudefly.png'
import {navlinks,otherlinks} from './../Constants/index.js'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const history=useLocation();

  return (
    <div className="isolate z-50 fixed top-0 bg-white w-full shadow-md">
      <div className="px-6 lg:px-12 lg:mx-12">
        <nav className="" aria-label="Global">
          <div className="flex items-center justify-between">
            <div className="mr-32 justify-start">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Company Logo</span>
                <img className="h-8" src={logoStudefly} alt="" />
              </a>
            </div>
            <div className="flex lg:hidden ">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
            {/* {console.log(history.pathname.includes("services"))} */}
              {navlinks.map((item,index) => (
                              
                <NavLink  key={index} to={item.link} className={(history.pathname.includes(item.link)&&item.link!="/")||(item.link.length==1 && history.pathname=="/")?"py-3 border-b-2 border-transparent hover:text-gray-800 border-blue-500 hover:border-blue-500 text-lg font-semibold leading-6 text-gray-900 "
                :"py-3 text-lg font-semibold leading-6 text-gray-900"}

                >
                  {item.title}
                </NavLink>

              ))}
              <NavLink to={otherlinks[1].link+otherlinks[2].link} className="lg:mx-0w-full bg-blue-800 text-white text-md font-bold rounded-full py-2 px-6 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
                Login
              </NavLink>
            </div>
          </div>
          
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel focus="true" className="fixed inset-0 z-50 w-48 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 mr-3">
                <span className="sr-only">Company Logo</span>
                <img className="h-8" src={logoStudefly} alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navlinks.map((item) => (
                    <NavLink key={item.id} to={item.link} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                  
                      {item.title}
                    </NavLink>
                  ))}
                    <NavLink to={otherlinks[1].link+otherlinks[2].link} className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10">
                      Login
                    </NavLink>
                </div>
                
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      
    </div>
  )
}
