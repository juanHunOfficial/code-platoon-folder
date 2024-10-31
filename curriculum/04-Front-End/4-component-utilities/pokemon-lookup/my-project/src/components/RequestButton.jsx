import axios from "axios"

function RequestButton({setFetchedPokemon, setFetchedImg, setFetchedTypes}){

    const fetchPokemon = async() =>{
        const randomNumber = Math.floor(Math.random() * 1025 + 1)
        let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        setFetchedPokemon(data)
        setFetchedImg(data.sprites.front_default)
        // setFetchedTypes(data.types[0].type.name)
        setFetchedTypes(data.types.length === 2 ? [data.types[0].type.name, " & " , data.types[1].type.name] : data.types[0].type.name)
    }

    return(
        <button className="border h-10 w-44 rounded-xl text-white bg-red-600 hover:bg-red-500" onClick={fetchPokemon} >Get My Pokemon!</button>

    )
}

export default RequestButton