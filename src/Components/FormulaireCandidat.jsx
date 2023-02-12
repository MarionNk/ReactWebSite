import React from 'react'

const FormulaireCandidat = () => {
  return (
    <>
    <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md  mt-20">
        <h1 className="text-xl font-bold  capitalize ">Informations Personnelles</h1>
        <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label className=" font-bold text-gray-700" for="username">Noms</label>
                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring"/>
                </div>
    
                <div>
                    <label className=" font-bold text-gray-700" for="username">Prenoms</label>
                    <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring"/>
                </div>
                
                <div>
                    <label className=" font-bold text-gray-700" for="passwordConfirmation">Date de Naissance</label>
                    <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className=" font-bold text-gray-700" for="passwordConfirmation">Nationnalite</label>
                    <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500 focus:outline-none focus:ring">
                        <option>Cameroun</option>
                        <option>France</option>
                        <option>Tunisie</option>
                        <option>Allemagne</option>
                    </select>
                </div>
                <h1 className="text-xl font-bold my-4  capitalize w-2/2">Votre Projet Academique / Professionel</h1>
                <div></div>
                <div>
                    <label className=" font-bold text-gray-700" for="eldiplome">Diplome le plus eleve</label>
                    <input id="eldiplome" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className=" font-bold text-gray-700" for="passwordConfirmation">Annee d'obtention</label>
                    <input id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500 focus:outline-none focus:ring"/>
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="">Importer le scan du diplome</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                        </label>
                        <p className="pl-1 ">ou Porter deposer</p>
                      </div>
                      <p className="text-xs ">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>

                <div>
                    <label className=" font-bold text-gray-700" for="filiere">Filiere souhaitee</label>
                    <input id="filiere" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring"/>
                </div>
                <div>
                    <label className=" font-bold text-gray-700" for="eldiplome">Que souhaitez vous faire dans le futur</label>
                    <input id="eldiplome" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500  focus:outline-none focus:ring"/>
                </div>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <span className="">Importer votre CV</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                        </label>
                        <p className="pl-1 ">ou Porter deposer</p>
                      </div>
                      <p className="text-xs ">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className=" font-bold text-gray-700" for="passwordConfirmation">Decrivez vos attentes (500mots)</label>
                    <textarea id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md    focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                </div>
            </div>
            <div className="flex justify-end mt-6">
                <button className="px-6 py-2 leading-5 text-md font-bold text-white  transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">Enregistrer</button>
            </div>
        </form>
    </section>
    </>

  )
}

export default FormulaireCandidat