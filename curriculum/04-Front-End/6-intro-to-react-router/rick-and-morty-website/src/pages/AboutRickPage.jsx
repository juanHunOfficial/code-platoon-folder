

function AboutRickPage() {
    const fetchedImg = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

    return(
        <>
            <img id="rick-img" src={ fetchedImg }  />
        </>
    )
}

export default AboutRickPage