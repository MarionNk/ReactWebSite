import React from 'react'

const Actualites = () => {
  return (
    <div>
        <section class="flex flex-col justify-center antialiased py-4 bg-white text-gray-900 ">
            <div class="max-w-6xl mx-auto p-4 sm:px-6 h-full">
                
                <article class="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                    <a class="relative block group" href="#0">
                        <div class="absolute inset-0 bg-gray-200 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                        <figure class="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                            <img class="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://preview.cruip.com/open-pro/images/blog-post-01.jpg" width="540" height="303" alt="Blog post"/>
                        </figure>
                    </a>
                    <div>
                        <header>
                            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                                Quoi de neuf chez StudeFly?
                            </h3>
                        </header>
                        <p class="text-lg text-gray-400 flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
                        
                    </div>
                </article>    
            </div>
        </section>

        
    </div>
  )
}

export default Actualites