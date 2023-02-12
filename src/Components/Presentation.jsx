import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import search from './../assets/search.png'
import studeflygr2 from './../assets/studeflygr2.png'
import girl from './../assets/img/girl.png'
import calendar from './../assets/img/calendar.svg'
import congrat from './../assets/img/congrat.svg'
import uxclass from './../assets/img/uxclass.svg'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../Constants'


export default function Presentation() {
  return (
    
    <div className=" pt-24 mb-6">
        
		<div className=" max-w-screen-xl px-8 mx-auto flex flex-col lg:flex-row items-start  lg:px-12">
			{/* <!--Left Col--> */}
			<div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
				<h1 data-aos="fade-right" data-aos-once="true" className="my-4 text-4xl lg:text-5xl font-bold leading-tight text-darken">
					<span className="text-blue-900">Etudier</span> en France est beaucoup plus facile
				</h1>
				<p data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className="leading-normal text-gray-600 text-lg mb-8">StudeFly est une plateforme numerique, securisee et multiservices, dediee tout d'abord aux etudiants, ensuite a tous ceux qui ont besoin de ses services</p>
				<div data-aos="fade-up" data-aos-once="true" data-aos-delay="700" className="z-40 w-full md:flex items-center justify-center lg:justify-start md:space-x-5">
					<NavLink to={navlinks[1].link}>
						<button className="lg:mx-0 bg-blue-900 text-white text-lg font-bold rounded-md py-4 px-9 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
							Nous rejoindre
						</button>
					</NavLink>
					<div className="flex items-center justify-center space-x-3 mt-5 md:mt-0 focus:outline-none transform transition hover:scale-110 duration-300 ease-in-out">
						<button className=" bg-white shadow-xl w-14 h-14 rounded-full flex items-center justify-center">
							<svg className="w-5 h-5 ml-2" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M22.5751 12.8097C23.2212 13.1983 23.2212 14.135 22.5751 14.5236L1.51538 27.1891C0.848878 27.5899 5.91205e-07 27.1099 6.25202e-07 26.3321L1.73245e-06 1.00123C1.76645e-06 0.223477 0.848877 -0.256572 1.51538 0.14427L22.5751 12.8097Z" fill="#23BDEE"/>
							</svg>
						</button>
						<span className="cursor-pointer font-bold text-md">Voir comment ca marche</span>
					</div>
				</div>
			</div>
			{/* <!--Right Col--> */}
			<div className="w-full lg:w-8/12 lg:mt-10 relative">
				<img data-aos="fade-up" data-aos-once="true" className="w-8/12 mx-auto 2xl:-mb-20" src={search} />
				{/* <!-- calendar --> */}
				<div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="absolute top-5 -left-6 sm:top-32 sm:left-10 md:top-40 md:left-16 lg:left-25 lg:top-0 floating-4">
					<img className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src={calendar}/>
				</div>
				{/* <!-- red --> */}
				<div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="absolute top-5 right-10 sm:right-24 sm:top-28 md:top-36 md:right-32 lg:top-5 lg:right-16 floating">
					<svg className="h-16 sm:h-24" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d)"><rect x="40" y="32" width="69" height="69" rx="14" fill="#F3627C"/></g><rect x="51.35" y="44.075" width="47.3" height="44.85" rx="8" fill="white"/><path d="M74.5 54.425V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><path d="M65.875 58.7375L65.875 78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><path d="M83.125 63.9125V78.575" stroke="#F25471" strokeWidth="4" strokeLinecap="round"/><defs><filter id="filter0_d" x="0" y="0" width="149" height="149" filterUnits="userSpaceOnUse" colorinterpolation-filters="sRGB"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="8"/><feGaussianBlur stdDeviation="20"/><feColorMatrix type="matrix" values="0 0 0 0 0.825 0 0 0 0 0.300438 0 0 0 0 0.396718 0 0 0 0.26 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
				</div>
				{/* <!-- ux class --> */}
				<div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="absolute bottom-16 -left-4 sm:left-2 sm:bottom-20 lg:bottom-56 lg:-left-1 floating">
					<img className="bg-white bg-opacity-80 rounded-lg h-20 sm:h-28" src={uxclass} alt=""/>
				</div>
				{/* <!-- congrats --> */}
				<div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" className="absolute bottom-20 md:bottom-48 lg:bottom-52 -right-6 lg:right-8 floating-4">
					<img className="bg-white bg-opacity-80 rounded-lg h-12 sm:h-16" src={congrat} alt=""/>
				</div>
			</div>
		</div>
		{/* <div className="text-white -mt-14 sm:-mt-24 lg:-mt-36  relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240"><path fill="#A2D9FF" fill-opacity="1" d="M0,224L18.5,224C36.9,224,74,224,111,213.3C147.7,203,185,181,222,192C258.5,203,295,245,332,229.3C369.2,213,406,139,443,106.7C480,75,517,85,554,106.7C590.8,128,628,160,665,165.3C701.5,171,738,149,775,149.3C812.3,149,849,171,886,160C923.1,149,960,107,997,112C1033.8,117,1071,171,1108,176C1144.6,181,1182,139,1218,106.7C1255.4,75,1292,53,1329,42.7C1366.2,32,1403,32,1422,32L1440,32L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"></path></svg>
			
		</div> */}
        
		<div className="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-0 relative">
			<svg className="xl:h-40 xl:w-full " data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
			</svg>
			<div className="bg-white w-full h-10 -mt-px"></div>
		</div>
	</div>

    
    )
}



    {/* <div className="overflow-hidden bg-white py-5 sm:py-5 lg:mx-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 ">
                <div className="mx-auto max-w-2xl ">
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-left">
                        <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Announcing our next round of funding.{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div> 
                    <div className="text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Presentation StudeFly
                    </h1>
                    <p className="mt-6 text-md leading-6 text-gray-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                        href="#"
                        className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        Get started
                        </a>
                        <a href="#" className="text-base font-semibold leading-7 text-gray-900">
                        Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    </div>
                </div>
                
          </div>
          <div className='lg:px-28 lg:py-14 '>
            <img
                src={studeflygr}
                alt="studefly group"
                className="w-80 px-3 align-middle align "
            />
          </div>
        </div>
      </div>
    </div> */}
 
