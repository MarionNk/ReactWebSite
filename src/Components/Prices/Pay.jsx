import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import SmallHero from '../SmallHero'
import studeflygr2 from './../../assets/studeflygr2.png'

const Pay = () => {
  return (
    <>
    <Navbar/>
    <div className='mt-20'></div>
    <SmallHero param1="lorem ipsum lorem ipsum lorem ipsum" param2="Souscription a un forfait"/>
    <div className='mx-4 mt-5'>    
        <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
            <p class="text-xl font-bold">Order Summary</p>
            <p class="text-gray-600">Check your items. And select a suitable shipping method.</p>
            <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={studeflygr2} alt="" />
                <div class="flex w-full flex-col px-4 py-4">
                <span class="font-semibold">Pack Admission</span>
                <span class="float-right text-gray-600">42EU - 8.5US</span>
                <p class="text-lg font-bold">$138.99</p>
                </div>
            </div>
            </div>

            <p class="mt-8 text-lg font-bold">Methodes de Paiement</p>
            <form class="mt-5 grid gap-6">
            <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                <img class="w-14 object-contain" src="https://www.insidebiz.co.sz/wp-content/uploads/2022/10/Untitled-1.jpg" alt="" />
                <div class="ml-5">
                    <span class="mt-2 font-semibold">MoMo</span>
                    {/* <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> */}
                </div>
                </label>
            </div>
            <div class="relative">
                <input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                <img class="w-14 object-contain" src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" alt="" />
                <div class="ml-5">
                    <span class="mt-2 font-semibold">Paypal</span>
                    {/* <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> */}
                </div>
                </label>
            </div>
            <div class="relative">
                <input class="peer hidden" id="radio_2" type="radio" name="radio" checked />
                <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                <img class="w-14 object-contain" src="data:image/png;base64,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" alt="" />
                <div class="ml-5">
                    <span class="mt-2 font-semibold">Visa or Master card</span>
                    {/* <p class="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p> */}
                </div>
                </label>
            </div>
            </form>
        </div>
        <div class="mt-10 shadow-md rounded-md  px-4 mx-4 pt-8 lg:mt-0">
            <p class="text-xl font-bold">Payment Details</p>
            <p class="text-gray-600">Complete your order by providing your payment details.</p>
            <div class="">
            <label for="email" class="mt-4 mb-2 block text-sm font-bold">Email</label>
            <div class="relative">
                <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                </div>
            </div>
            <label for="card-holder" class="mt-4 mb-2 block text-sm font-bold">Card Holder</label>
            <div class="relative">
                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>
                </div>
            </div>
            <label for="card-no" class="mt-4 mb-2 block text-sm font-bold">Card Details</label>
            <div class="flex">
                <div class="relative w-7/12 flex-shrink-0">
                <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="xxxx-xxxx-xxxx-xxxx" />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg class="h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                </div>
                </div>
                <input type="text" name="credit-expiry" class="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="MM/YY" />
                <input type="text" name="credit-cvc" class="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="CVC" />
            </div>
            <label for="billing-address" class="mt-4 mb-2 block text-sm font-bold">Billing Address</label>
            <div class="flex flex-col sm:flex-row">
                <div class="relative flex-shrink-0 sm:w-7/12">
                <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                </div>
                </div>
                <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                <option value="State">State</option>
                </select>
                <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
            </div>

            <div class="mt-6 border-t border-b py-2">
                <div class="flex items-center justify-between">
                <p class="text-sm font-bold text-gray-900">Subtotal</p>
                <p class="font-semibold text-gray-900">$399.00</p>
                </div>
                <div class="flex items-center justify-between">
                <p class="text-sm font-bold text-gray-900">Shipping</p>
                <p class="font-semibold text-gray-900">$8.00</p>
                </div>
            </div>
            <div class="mt-6 flex items-center justify-between">
                <p class="text-sm font-bold text-gray-900">Total</p>
                <p class="text-2xl font-semibold text-gray-900">$408.00</p>
            </div>
            </div>
            <button class="mt-4 mb-8 w-full rounded-md bg-blue-900 px-6 py-3 font-bold text-white">Place Order</button>
        </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Pay