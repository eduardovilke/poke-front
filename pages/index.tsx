import { FormEvent, useState } from "react"
import { api } from "../services/api"

interface Pokemon {
  name?: string;
}

export default function Home(){
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon>({})
  const [loading, setLoading] = useState(false)
  const [pokemonNotFound, setPokemonNotFound] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setPokemonNotFound(false)

    const response = await api.get(`/pokemons/${search}`)
      .then((response) => response.data)
      .catch((err) => console.log(err))

    if(!response){
      setPokemonNotFound(true)
    }

    setLoading(false)
    setPokemon(response)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-8 text-center">Pokedex ZRP</h1>
      <form onSubmit={handleSubmit}>
        <label className="relative block">
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
          className="bg-sky-600 hover:bg-sky-700"
          type="submit"
        >
          Buscar
        </button>
      </form>
      {!!loading && <p>Carregando...</p> }
      {!!pokemonNotFound && <p>Pokemon não encontrado!</p> }
      {!!pokemon && <h2>{pokemon.name}</h2> }
    </div>
  )
}