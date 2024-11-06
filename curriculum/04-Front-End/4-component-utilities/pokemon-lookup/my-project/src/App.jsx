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

  
    const fromPokemonTypeColors = {
      "fire": 'from-red-500',
      "water": 'from-blue-500',
      "grass": 'from-green-500',
      "electric": 'from-yellow-500',
      "normal": 'from-gray-300',
      "ice": 'from-cyan-200',
      "fighting": 'from-red-700',
      "poison": 'from-purple-600',
      "ground": 'from-orange-600',
      "flying": 'from-blue-400',
      "psychic": 'from-pink-300',
      "rock": 'from-yellow-600',
      "ghost": 'from-purple-700',
      "dragon": 'from-blue-600',
      "dark": 'from-gray-700',
      "steel": 'from-gray-300',
      "fairy": 'from-pink-400',
      "bug": 'from-green-300',
    };

    const toPokemonTypeColors = {
      "fire": 'to-red-500',
      "water": 'to-blue-500',
      "grass": 'to-green-500',
      "electric": 'to-yellow-500',
      "normal": 'to-gray-300',
      "ice": 'to-cyan-200',
      "fighting": 'to-red-700',
      "poison": 'to-purple-500',
      "ground": 'to-orange-600',
      "flying": 'to-blue-400',
      "psychic": 'to-pink-300',
      "bug": 'to-green-300',
      "rock": 'to-yellow-600',
      "ghost": 'to-purple-800',
      "dragon": 'to-blue-600',
      "dark": 'to-gray-700',
      "steel": 'to-gray-300',
      "fairy": 'to-pink-400',
    };
    let fromColor = ""
    let toColor = ""

    function capitalize(word){
      word = word.charAt(0).toUpperCase() + word.slice(1)
    }
    Array.isArray(fetchedTypes) ? (fromColor = fromPokemonTypeColors[fetchedTypes[0]], toColor = toPokemonTypeColors[fetchedTypes[2]]) :
    (fromColor = fromPokemonTypeColors[fetchedTypes], toColor = toPokemonTypeColors[fetchedTypes])

    //build a capitalize function that will capitalize the name and build another for the array
    
  return (
    <>
      <div className= {`bg-gradient-to-r  ${toColor} ${fromColor} container animate-shine shadow-lg z-0 mx-auto flex mt-32 justify-center items-center border-4 border-black rounded-xl h-96 w-72 relative overflow-hidden `} >
      <div className='absolute inset-0 holographic-overlay animate-shine from-white/10 to-white/30 pointer-events-none' ></div>
        <PokemonImg fetchedImg={fetchedImg}/>
        <h2 className='absolute text-center font-semibold text-3xl z-30 w-auto top-4'> {fetchedPokemon.name === undefined ? "" : capitalize(fetchedPokemon.name)}</h2>
        <h4 className='absolute text-center font-semibold text-2xl z-30 top-72 w-auto' >{fetchedTypes}</h4>
      </div> 
      <div className='flex justify-center mt-10'>
      <RequestButton setFetchedPokemon={setFetchedPokemon} setFetchedTypes={setFetchedTypes} setFetchedImg={setFetchedImg} />
      </div>
    </>
  )
}

export default App
