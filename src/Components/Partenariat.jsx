import React from 'react'

const Partenariat = () => {
  return (
        <div className="py-14 ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-bold text-lg text-gray-900 text-center">
                    NOS PARTENAIRES A TRAVERS LE MONDE
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {/* LOGO 1 */}
                      <li>
                        <img className="w-28" src="data:image/png;base64,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" alt="" />
                        
                      </li>

                        {/* LOGO 2 */}
                      <li>
                        <img className='w-28' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5tUCW6RkE0Z6ZpqEGmHd4V-Q9tfQwcval7g&usqp=CAU"/>
                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <img className='w-28' src="data:image/png;base64,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"/>
                      </li>

                        {/* LOGO 4 */}
                      <li>
                        <img className='w-28' src="data:image/png;base64,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"/>  
                      </li>
                        {/* LOGO 5 */}
                      <li>
                        <img className='w-28' src="https://www.sorbonne.fr/wp-content/uploads/UPEC-logo.svg_.png"/>  
                      </li>

                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Partenariat