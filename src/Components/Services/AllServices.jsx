import React from 'react'
import { NavLink } from 'react-router-dom'
import { navlinks } from '../../Constants'

const AllServices = () => {
  return (
    <section className=" text-gray-800 ">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-gray-900">Nous œuvrons pour le bien-être de nos candidats</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center text-gray-500">Quando cetero his ne, eum admodum sapientem ut.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Projet d'etude en France</h3>
				<p className="mt-3 text-lg text-gray-500">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://images.ctfassets.net/ggqk0ksrp1li/6a6ptllBf8IemqLe1gAUF3/8212867b62fa4dad106339004276dc88/preparation_arrivee_france_.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
			{/* 
			<NavLink to={navlinks[3].link} className="py-3 px-6 text-lg w-2/4 bg-blue-900 hover:bg-blue-900 focus:ring-blue-800 focus:ring-offset-blue-200 text-white  transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
					Souscrire
			</NavLink> */}
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Gestion de logement </h3>
					<p className="mt-3 text-lg text-gray-400">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
					
				</div>
				
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://i.f1g.fr/media/eidos/805x453_crop/2019/02/01/XVM53c08d64-2616-11e9-a262-40964c8f5d77.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Vacances et Tourisme</h3>
				<p className="mt-3 text-lg text-gray-500">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
							<p className="mt-2 text-gray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="https://www.airvacances.fr/wp-content/uploads/2020/11/Calanques-de-Piana-Corse.jpg" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-gray-900">Integration en france</h3>
					<p className="mt-3 text-lg text-gray-400">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-gray-900">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-bold leading-6 text-gray-900">Point cle du service</h4>
								<p className="mt-2 text-gray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
							</div>
						</div>
					</div>
					
				</div>
				
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="https://www.interieur.gouv.fr/sites/minint/files/styles/dsfr_16_9/public/medias/images/Infog_ANEF_janv2023.jpg?itok=a1Rmx6_n" alt="" className="mx-auto rounded-lg shadow-lg bg-gray-500" />
				</div>
			</div>
		
		</div>
	</div>
</section>
  )
}

export default AllServices