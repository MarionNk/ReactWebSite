import React from 'react'

const Actualites = () => {
  return (
    <div className='mx-5'>
        <section className="flex flex-col justify-center antialiased py-4 mt-6 bg-white text-gray-900 ">
            <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                
                <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    {/* <a className="relative block group" href="#0">
                        <div className="absolute inset-0 bg-gray-200 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                        <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg" width="540" height="303" alt="Blog post"/>
                        </figure>
                    </a> */}

                    <div>
                        <header>
                            <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                Quoi de neuf chez StudeFly?
                            </h3>
                        </header>
                        <p className="text-lg text-gray-400 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                        
                    </div>
                    <div className="h-96 my-4  p-3 relative">
                        <div className=" mx-auto" >{/* style="scroll-snap-type: x mandatory;" */}
                            {/* <!-- first --> */}
                            <div className="">
                            <input className="sr-only peer" type="radio" name="carousel" id="carousel-1" defaultChecked />
                            {/* <!-- content #1 --> */}
                            <div
                                className="w-80 lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                <img className="rounded-t-lg w-96 h-64" src="https://i.ytimg.com/vi/CS5tVpY_NOU/maxresdefault.jpg"/>
                                <div className="py-4 px-8">
                                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">Lorem
                                        ipsum dolor
                                    </h1>
                                    <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet
                                        consectetur adipisicing elit.
                                    </p>
                                </div>
                                {/* <!-- controls --> */}
                                <div className="absolute top-1/2 w-full flex justify-between z-20">
                                    <label for="carousel-3" className="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                    <label for="carousel-2" className="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            </div>
                            {/* <!-- second --> */}
                            <div className="">
                            <input className="sr-only peer" type="radio" name="carousel" id="carousel-2" />
                            {/* <!-- content #2 --> */}
                            <div
                                className="w-80 lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                <img className="rounded-t-lg w-96 h-64" src="https://etudes-france.org/wp-content/uploads/2022/09/image-figaro-etudiants-etrangers-france-1024x576.webp" alt="" />
                                <div className="py-4 px-8">
                                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                    Lorem Ipsum 
                                    </h1>
                                    <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Egestas diam in arcu cursus euismod
                                        quis. Fusce id velit ut tortor. Congue quisque egestas diam in arcu cursus euismod quis.
                                    </p>
                                </div>
                                {/* <!-- controls --> */}
                                <div className="absolute top-1/2 w-full flex justify-between z-20">
                                    <label for="carousel-1" className="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                    <label for="carousel-3" className="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            </div>
                            {/* <!-- three --> */}
                            <div className="">
                            <input className="sr-only peer" type="radio" name="carousel" id="carousel-3" />
                            {/* <!-- content #3 --> */}
                            <div
                                className="w-80 lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                <img className="rounded-t-lg w-96 h-64" src="https://bourses-etudes.net/wp-content/uploads/2021/08/etudier-en-France-pour-les-etudiants-etrangers.png" alt="" />
                                <div className="py-4 px-8">
                                    <h1 className="hover:cursor-pointer mt-2 text-gray-900 font-bold text-2xl tracking-tight">
                                        Lorem Ipsum 
                                    </h1>
                                    <p className="hover:cursor-pointer py-3 text-gray-600 leading-6">Aliquam ultrices sagittis orci a
                                        scelerisque purus semper. Quisque id diam vel quam elementum pulvinar. Facilisis magna etiam
                                        tempor orci eu lobortis elementum.
                                    </p>
                                </div>
                                {/* <!-- controls --> */}
                                <div className="absolute top-1/2 w-full flex justify-between z-20">
                                    <label for="carousel-2" className="inline-block text-yellow-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                    <label for="carousel-1" className="inline-block text-yellow-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                </article>    
            </div>
            
        </section>

        
    </div>
  )
}

export default Actualites