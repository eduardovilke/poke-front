import { FormEvent, useState } from "react"
import { Loading } from "../components/Loading";
import { NotFound } from "../components/NotFound";
import { Pokemon } from "../components/Pokemon";
import { api } from "../services/api"
import { GoSearch } from 'react-icons/go'

export default function Home(){
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(false)
  const [pokemonNotFound, setPokemonNotFound] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setPokemonNotFound(false)
    setPokemon({})

    const response = await api.get(`/pokemons/${search.toLowerCase()}`)
      .then((response) => response.data)
      .catch((err) => console.log(err))

    if(!response){
      setPokemonNotFound(true)
      setPokemon({})
    }

    setLoading(false)
    setPokemon(response)
  }

  return (
    <div className="container mx-auto mt-8 ">
      <h1 className="text-4xl mb-8 text-center ">Pokedex ZRP</h1>
      <form className="flex justify-center" onSubmit={handleSubmit}>
        <label className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <GoSearch />
        </div>
          <input 
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Pesquise algum pokemon" 
            type="text" 
            name="search"
            value={search}
            onChange={event => setSearch(event.target.value)}
          />
        </label>
        <button 
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4"
          type="submit"
          disabled={loading}
        >
          Buscar
        </button>
      </form>

      {!!loading && <div className="flex justify-center"><Loading /></div>}
      {!!pokemonNotFound && <div className="flex justify-center"><NotFound /></div> }
      {!!pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  )
}