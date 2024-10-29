import { useState } from 'react'
import axios from "axios"
import "./UserInput.css"

function UserRequest() {
    const [pokemonImgs, setPokemonImgs] = useState([])
    
    const fetchImg = async(input) => {
        let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`)
        setPokemonImgs(previousStateOfImgs => [...previousStateOfImgs, data.sprites.front_default])
    }

    const handleInput = (evt) => {
        evt.preventDefault()
        let input = document.querySelector("#pokemon-search-field").value
        document.querySelector("#pokemon-search-field").value = ""
        fetchImg(input)
    }

    const changeTheState = (index) => {
        setPokemonImgs(pokemonImgs.filter((_, currentIndex) => currentIndex !== index))
    }

    const handleClick = async() =>{
        const randomNumber = Math.floor(Math.random() * 1000)
        let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        setPokemonImgs(previousStateOfImgs => [...previousStateOfImgs, data.sprites.front_default])
    }

    return (

        <>
            <h1>Build Your Pokemon Team!</h1>
            <form onSubmit={handleInput}>
                <input id='pokemon-search-field' type='text' placeholder='Enter the name of your pokemon'/>
                <input type='submit' value="Add Pokemon!" />
            </form>
            <button id='pokemon-randomizer' onClick={handleClick} >Get Random Pokemon</button>
            {pokemonImgs.map((pokemon, index) =>
                <img src={pokemon} key={index} onClick={() => {changeTheState(index)}}>
                </img>
            )}
        </>
    )
}

export default UserRequest