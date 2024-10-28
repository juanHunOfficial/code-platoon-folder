import './App.css'

const createEntry = (userInput) => {
  let taskList = document.querySelector("#list-of-tasks")
  let newTask = document.createElement("li")
  newTask.className = "list-items"
  newTask.innerText = userInput
  taskList.appendChild(newTask)
  document.querySelector("#input-field").value = ""
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  let input = document.querySelector("#input-field")
  let userInput = input.value 
  createEntry(userInput)
}

function App() {
    


  return (
    <>
      <form onSubmit={(evt) => handleSubmit(evt)} >
        <input id="input-field" type="text" placeholder="Add a task" />
        <input type="submit" value="Add" />
      </form>
      <div id="tasks-container" >
        <ul id="list-of-tasks" >

        </ul>
      </div>
      
    </>
  )
}

export default App
