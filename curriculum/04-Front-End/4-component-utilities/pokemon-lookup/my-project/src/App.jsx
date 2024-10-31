import './App.css'
import PokemonImg from './components/PokemonImg'
import RequestButton from './components/RequestButton'
import { useState } from 'react'
import noPokemonBackground from "./assets/whos-that-pokemon.jpeg"

function App() {
  const [fetchedPokemon, setFetchedPokemon] = useState("")
  const [fetchedImg, setFetchedImg] = useState(noPokemonBackground)
  const [fetchedTypes, setFetchedTypes] = useState(["none"])

  console.log(fetchedPokemon)
  return (
    <>
      <div className='container z-0 mx-auto flex mt-32 justify-center items-center border rounded-xl h-96 w-72 relative bg-indigo-600' >
        <PokemonImg fetchedImg={fetchedImg}/>
        <h2 className='absolute text-center font-semibold text-3xl z-30 w-auto top-4'>{fetchedPokemon.name}</h2>
        <h4 className='absolute text-center font-semibold text-2xl z-30 top-72 w-auto' >{fetchedTypes}</h4>
      </div>
      <div className='flex justify-center mt-10'>
      <RequestButton setFetchedPokemon={setFetchedPokemon} setFetchedTypes={setFetchedTypes} setFetchedImg={setFetchedImg} />
      </div>
    </>
  )
}

export default App
