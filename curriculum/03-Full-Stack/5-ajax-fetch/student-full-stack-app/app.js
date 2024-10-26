const fetchFromFlask = (evt) =>{
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const formProps = Object.fromEntries(formData)
    const input_field = document.querySelector("#input-field")
    let p_tag = document.querySelector("#response-field")
    let search_entry = formProps["entry"].trim()
    input_field.value = ""
    


    if(search_entry.includes("students")){
        search_entry = "students"
    }else if(search_entry.includes("enrollments")){
        search_entry = "enrollments"
    }else if(search_entry.includes("classes")){
        search_entry = "classes"
    }else if(search_entry.includes("addresses")){
        search_entry = "addresses"
    }else{
        p_tag.innerText = "Sorry an invalid entry was given please check your spelling."
        return
    }
    
    console.log(`--${search_entry}--`)
    const flask_url = `http://127.0.0.1:8000/${search_entry}`
    fetch(flask_url)
        .then((response) => response.json())
            .then((data) => {
                console.log(data)
                Object.keys(data["1"]).forEach(key => {
                    p_tag.innerText = `${key}: ${data["1"][key]}\n`
                })
            })
            .catch(error => {
                console.error('Error:', error);
            });
}   