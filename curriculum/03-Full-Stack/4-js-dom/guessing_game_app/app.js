let correct_number = Math.floor(Math.random() * 100) +1;

const formSubmit = (evt) => {
    evt.preventDefault()
    const formData = new FormData(evt.target)
    const formProps = Object.fromEntries(formData)
    let number_tag = document.querySelector("#number")
    let guess = formProps["guess"]
    number_tag.innerText = formProps["guess"]
    guessingGame(guess)
}

const newGameRefresh = () => {
    location.reload();
}

function guessingGame(guess){
    let guess_indicator = document.querySelector("#high-low-meter")
    let guessed_collection = document.querySelector("#display-guessed-items")
    
    if(guess > correct_number){
        guess_indicator.innerText = "TOO HIGH!"
    }else if(guess < correct_number){
        guess_indicator.innerText = "TOO low"
    }else{
        guess_indicator.innerText = "CORRECT"
    }
    
    guessed_collection.innerText += `--${guess}-- `

}

