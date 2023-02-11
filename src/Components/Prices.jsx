import React from 'react'
import {prices} from './../Constants/index.js'

import informaticienne from './../assets/informaticienne.png'
import { NavLink } from 'react-router-dom'

const Prices = () => {
  return (
    <div className="mx-5 mt-5 mb-20">
        <h4 className="text-center text-4xl pb-12 font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9">
            Nos Packs & Prix
        </h4>
        <div className="flex flex-wrap space-y-5  items-center justify-center gap-8 sm:flex">
            {prices.map((item,index)=>(

                <div key={index} className="even:transform even:transition even:scale-110 even:duration-300 even:ease-in-out hover:shadow-4xl  w-64 p-4 even:bg-blue-500 shadow-xl rounded-2xl bg-blue-400">
                    <div className=" items-center text-center text-white">
                        <p className="mb-4 text-1xl font-large font-bold">
                            {item.id}
                        </p>
                        <p className=" text-3xl font-bold">
                            {item.prix} /
                            <span className="text-sm font-thin text-right">
                                {item.payement}
                            </span>
                        </p>
                    </div>
                    <p className="mt-4 text-white text-md">
                        Services inclus :
                    </p>
                    <ul className="w-full mt-6 mb-6 text-sm text-white">
                        {/* {item.services} */}
                        {item?.services?.map((element,index) => (
                            <li key={index} className="mb-3 flex justify-items-start">
                                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                {element.id}
                            </li>
                        ))}
                        
                    </ul>
                   {/*  <NavLink to='prix/subscribe'> */}
                        <a href='prix/subscribe'>
                            <button type="button" className="w-full px-3 py-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow hover:bg-yellow-300 ">
                                Souscrire
                            </button>
                        </a>
                    {/* </NavLink> */}
                </div>

            ))}

           {/*  <div  className='w-64 px-4'>
                <img src={informaticienne} className="my-8justify-center" alt=""/>
            </div> */}
        </div>
        
    </div>
  )
}

export default Prices