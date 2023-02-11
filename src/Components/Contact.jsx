import React from 'react'

const Contact = () => {
  return (
    <div className='grid grid-cols-5 justify-center lg:mx-20 mx-6 '>
        <div className='lg:col-span-3 mt-3 col-span-5 grid lg:mr-10 content-center'>
            <img className="" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg" alt="" />
        </div>
        <section className="bg-white lg:col-span-2  p-5 col-span-5">
            <div className="py-3 lg:py-5 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contactez-Nous</h2>
                <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 text-dmd">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                <form action="#" className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 text-dmd font-bold text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-dmd border border-gray-300 text-gray-900 text-dmd rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@studefly.com" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-1 text-dmd font-bold text-gray-900 ">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-dmd text-gray-900 rounded-lg border border-gray-300 shadow-dmd focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required/>
                    </div>
                    <div className="dmd:col-span-2">
                        <label htmlFor="message" className="block mb-1 text-dmd font-bold text-gray-900 ">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-dmd text-gray-900 rounded-lg shadow-dmd border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
                    </div>
                    
                    <button className="lg:mx-0 bg-blue-900 text-white text-lg w-full font-bold rounded-md py-2 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						Envoyer
					</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact