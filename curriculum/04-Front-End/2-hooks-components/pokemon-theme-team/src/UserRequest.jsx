import { useState } from 'react'
import axios from "axios"
import "./UserInput.css"

function UserRequest() {
    const [pokemonImgs, setPokemonImgs] = useState([])

    const changeTheState = (index) => {
        setPokemonImgs(pokemonImgs.filter((_, currentIndex) => currentIndex !== index))
    }

    const setTheRestOfTheTeam = async(currentTypes) => {
        let count = 1
        while (count < 6){
            const randomNumber = Math.floor(Math.random() * 1000 + 1)
            let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            if(data.types.length === 2 && (currentTypes[0] === data.types[0].type.name && currentTypes[1] === data.types[1].type.name)){
                setPokemonImgs(previousStateOfImgs => [...previousStateOfImgs, data.sprites.front_default])
                count++
            }else if (data.types.length === 1 && currentTypes[0] === data.types[0].type.name){
                setPokemonImgs(previousStateOfImgs => [...previousStateOfImgs, data.sprites.front_default])
                count++
            }
            
        }
    }

    const handleClick = async() =>{
        const randomNumber = Math.floor(Math.random() * 1000 + 1)
        let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        const currentTypes = []
        if(data.types.length === 2){
            currentTypes.push(data.types[0].type.name, data.types[1].type.name)
        }else{
            currentTypes.push(data.types[0].type.name)
        }
        setPokemonImgs(previousStateOfImgs => [...previousStateOfImgs, data.sprites.front_default])
        setTheRestOfTheTeam(currentTypes)
    }

    return (

        <>
            <h1 id='title'>Build Your Pokemon Team!</h1>

            <div id='pokemon-imgs-container'>
                {pokemonImgs.map((pokemon, index) =>
                    <img src={pokemon} key={index} onClick={() => {changeTheState(index)}}>
                    </img>
                )}
            </div>

            <div id='randomize-btn-container'>
                <button id='pokemon-randomizer' onClick={handleClick} >Get Your Team</button>
            </div>
        </>
    )
}

export default UserRequest