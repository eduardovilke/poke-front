import Image from "next/image";

export function Pokemon ({ pokemon }: any): JSX.Element {
  return (
    <>
      {Object.keys(pokemon).length > 0 && (
        <>
          <div className="flex flex-col items-center">
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={250}
              height={250}
            />
            <h2 className="text-4xl capitalize">{pokemon.name}</h2>
            <div className="flex mt-6">
              <span className="mr-2">Abilities: </span>
              {pokemon.abilities.map((ability: any) => 
                (
                  <span key={ability.ability.name} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-lg dark:bg-blue-200 dark:text-blue-800">{ability.ability.name}</span>
                )
              )}
            </div>
          </div>
          <ul className="flex flex-col mt-4 mx-52">
            {pokemon.stats.map((stat: any) => 
              (
                <li 
                  key={stat.stat.name}
                  className="flex justify-between pt-2"
                >
                  <p className="text-2xl capitalize">{stat.stat.name}</p>
                  <p className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">{stat.base_stat}</p>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </>
  )
}