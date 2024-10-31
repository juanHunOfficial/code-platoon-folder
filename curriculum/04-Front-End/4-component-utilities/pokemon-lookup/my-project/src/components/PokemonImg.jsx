



function PokemonImg({fetchedImg}){


    return(
        
        <>
            <img className="border rounded-xl h-48 w-48 mt-10 absolute top-5 bg-slate-950 " src={fetchedImg} alt="An image of your requested pokemon" />
        </>
    )
}

export default PokemonImg