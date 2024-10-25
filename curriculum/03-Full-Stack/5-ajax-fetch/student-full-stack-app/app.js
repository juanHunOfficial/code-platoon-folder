const fetchFromFlask = (evt) =>{
    evt.preventDefault()
    let p_tag = document.querySelector("#test-connection")
    const flask_url = "http://127.0.0.1:8000"
    fetch(flask_url+"/students")
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                Object.keys(data["1"]).forEach(key => {
                    p_tag.innerText += `${key}: ${data["1"][key]}\n`
                })
            })
            .catch(error => {
                console.error('Error:', error);
            });
}   