import React from 'react'

const PaymentSecured = () => {
  return (
    <div className="py-14 ">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <h3 className="font-bold text-2xl uppercase text-gray-900 text-center">
                    Paiements Securisés
                </h3>
                <div className="mt-6">
                    <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                        {/* LOGO 1 */}
                      <li>
                        <img className="w-28" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png" alt="" />
                        
                      </li>

                        {/* LOGO 2 */}
                      <li>
                        <img className='w-28' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"/>
                      </li>

                        {/* LOGO 3 */}
                      <li>
                        <img className='w-28' src="https://play-lh.googleusercontent.com/ZZzobZMd5ewtZsX7B6bYyj1yMb7hyOEhVCpqsYlbDA0MGQaGuMAIlddE8xWvksIyhLZt"/>
                      </li>

                        {/* LOGO 4 */}
                      <li>
                        <img className='w-28' src="https://www.y-note.cm/wp-content/uploads/2019/08/orange-money-696x398.png"/>  
                      </li>

                    </ul>
                </div>
            </div>
        </div>
  )
}

export default PaymentSecured