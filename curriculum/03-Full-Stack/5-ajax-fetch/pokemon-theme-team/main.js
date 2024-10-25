const getPokemonFromApi = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const formProps = Object.fromEntries(formData)
    const inputField = document.querySelector("#requested-pokemon")
    inputField.value = ""
    let img = document.querySelector("#img-tag")
    let url = `https://pokeapi.co/api/v2/pokemon/${formProps["pokemon"]}`
    fetch(url)
        .then((response)=> response.json())
        .then((data)=>{
            let imageToRender = data.sprites.front_default
            img.src = imageToRender
        })
        .catch(error => {
            console.error('Error:', error);
        });
}   