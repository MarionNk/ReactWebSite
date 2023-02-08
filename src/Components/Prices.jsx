import React from 'react'
import {prices} from './../Constants/index.js'

import informaticienne from './../assets/informaticienne.png'

const Prices = () => {
  return (
    <div className="mx-5 mb-20">
        <h4 class="text-center text-4xl pb-12 font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
            Nos Packs & Prix
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:flex">
            {prices.map((item)=>(

                <div class="w-64 p-4 bg-blue-500 shadow-xl rounded-2xl dark:bg-gray-800">
                    <div class=" items-center text-center text-white">
                        <p class="mb-4 text-1xl font-large font-bold">
                            {item.id}
                        </p>
                        <p class=" text-3xl font-bold">
                            {item.prix} /
                            <span class="text-sm font-thin text-right">
                                {item.payement}
                            </span>
                        </p>
                    </div>
                    <p class="mt-4 text-white text-md">
                        Services inclus :
                    </p>
                    <ul class="w-full mt-6 mb-6 text-sm text-white">
                        {/* {item.services} */}
                        {item?.services?.map((element) => (
                            <li class="mb-3 flex justify-items-start">
                                <svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="white" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                {element.id}
                            </li>
                        ))}
                        
                    </ul>
                    
                    <button type="button" class="w-full px-3 py-3 text-sm font-bold text-gray-700 bg-white rounded-lg shadow hover:bg-yellow-300 ">
                        Souscrire
                    </button>
                </div>

            ))}

            <div  className='w-64 p-4'>
                <img src={informaticienne} className="my-8justify-center" alt=""/>
            </div>
        </div>
        
    </div>
  )
}

export default Prices