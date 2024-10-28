import React, {useState} from "react"
import './App.css'


function App() {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (evt) => {
      evt.preventDefault()
      let input = document.querySelector("#input-field")
      let userInput = input.value 
      document.querySelector("#input-field").value = ""
      createEntry(userInput)
    }

    const createEntry = (userInput) => {
        setTasks(prevTaskInstance => [...prevTaskInstance, userInput]);
    }

    function handleRemoveTask(index){
      setTasks(tasks.filter((_, currentIndex) => currentIndex !== index));
    }

  return (
    <>
      <form onSubmit={(evt) => handleSubmit(evt)} >
        <input id="input-field" type="text" placeholder="Add a task" />
        <input type="submit" value="Add" />
      </form>
      <div id="tasks-container" >
        <ul id="list-of-tasks" >
          {tasks.map((task, index) => 
          <li key={index} onClick={() => handleRemoveTask(index)}>
            {task}
          </li>)}
        </ul>
      </div>
      
    </>
  )
}

export default App
