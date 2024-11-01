import './App.css'
import './index.css'
import PokemonImg from './components/PokemonImg'
import RequestButton from './components/RequestButton'
import { useState } from 'react'
import noPokemonBackground from "./assets/whos-that-pokemon.jpeg"

function App() {
  const [fetchedPokemon, setFetchedPokemon] = useState("")
  const [fetchedImg, setFetchedImg] = useState(noPokemonBackground)
  const [fetchedTypes, setFetchedTypes] = useState(["none"])

console.log(fetchedTypes)

  
    const pokemonTypeColors = {
      "fire": '-red-500',
      "water": '-blue-500',
      "grass": '-green-500',
      "electric": '-yellow-500',
      "normal": '-gray-200',
      "ice": '-cyan-200',
      "fighting": '-red-700',
      "poison": '-purple-600',
      "ground": '-orange-600',
      "flying": '-blue-400',
      "psychic": '-pink-300',
      "bug": '-green-400',
      "rock": '-yellow-600',
      "ghost": '-purple-700',
      "dragon": '-blue-600',
      "dark": '-gray-700',
      "steel": '-gray-300',
      "fairy": '-pink-400',
    };
    let fromColor = pokemonTypeColors[fetchedTypes[0]]
    let toColor = pokemonTypeColors[fetchedTypes[2]]
    fetchedTypes.length === 3 ? (fromColor = 'from'+pokemonTypeColors[fetchedTypes[0]], toColor = 'to'+pokemonTypeColors[fetchedTypes[2]]) :
    (fromColor = 'from'+pokemonTypeColors[fetchedTypes], toColor = 'to'+pokemonTypeColors[fetchedTypes])

    // if(fromColor === "from-red-500"){
    //   fromColor = "from-red-500"
    // }

    console.log(fromColor)
    console.log(toColor)
    
  return (
    <>
      <div style={{backgroundColor: fromColor,toColor}} className= {`bg-gradient-to-r ${toColor} ${fromColor} container animate-shine shadow-lg z-0 mx-auto flex mt-32 justify-center items-center border-4 border-black rounded-xl h-96 w-72 relative overflow-hidden `} >
      <div className='absolute inset-0 holographic-overlay animate-shine from-white/10 to-white/30 pointer-events-none' ></div>
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
