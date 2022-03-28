import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-8 text-center">Pokedex ZRP</h1>
      <label className="relative block">
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Pesquise algum pokemon" type="text" name="search"/>
      </label>
      <button className="bg-sky-600 hover:bg-sky-700">
        Buscar
      </button>
    </div>
  )
}

export default Home
