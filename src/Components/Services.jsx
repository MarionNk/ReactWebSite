import React from 'react'
import b from './../assets/b.jpg'
import {services} from './../Constants/index.js'

const Services = () => {
  return (
    <div className=" pb-10">
    {/* <div class="text-white -mt-1 relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A2D9FF" fill-opacity="1" d="M0,224L18.5,224C36.9,224,74,224,111,213.3C147.7,203,185,181,222,192C258.5,203,295,245,332,229.3C369.2,213,406,139,443,106.7C480,75,517,85,554,106.7C590.8,128,628,160,665,165.3C701.5,171,738,149,775,149.3C812.3,149,849,171,886,160C923.1,149,960,107,997,112C1033.8,117,1071,171,1108,176C1144.6,181,1182,139,1218,106.7C1255.4,75,1292,53,1329,42.7C1366.2,32,1403,32,1422,32L1440,32L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"></path></svg>
        
    </div> */}
    <div className="mx-5 mb-10 ">
        <h4 class="text-center text-4xl pb-4 font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
            Nos Services
        </h4>
        <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
            {services.map((item)=>(
                <div class="w-full px-4 py-4 mt-6 bg-blue rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 dark:bg-gray-800">
                    <div class="flex-shrink-0">
                        <div class="flex items-center justify-center w-12 h-12 mx-auto drop-shadow-xl text-white bg-yellow-300 rounded-full">
                            <svg width="20" height="20" fill="currentColor" class="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl dark:text-white">
                        {item.title}
                    </h3>
                    <p class="py-4 text-gray-500 text-md dark:text-gray-300">
                        {item.detail}
                    </p>
                </div>
                ))}
            </div>
        </div>
    
    </div>
  )
}

export default Services