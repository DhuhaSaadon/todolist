import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';
import {useState, useEffect} from 'react';


function App() {

  const[inputText, SetInputText] = useState("")
  const[todos, SetTodos] = useState([])
  const [status, setStatus] = useState('All')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos()
  },[])


  useEffect(() => {
    filteredHandler()
    saveLocalTodos()
  },[todos, status])

  const filteredHandler = () => {
    switch(status){
      case 'completed': 
      setFilteredTodos(todos.filter(todo => todo.completed === true))
      break;
      case 'uncompleted': 
      setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
      setFilteredTodos(todos)
      break;
    }
  }

  const saveLocalTodos = () => {
    
      localStorage.setItem('todos' , JSON.stringify(todos))
  
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos' , JSON.stringify([]))
    }
    else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      SetTodos(todoLocal)
    }
  }


  return (
    <div className="App">
     <header>
      <h1>Dhuha's Todo List</h1>
    </header>
    <Form  setStatus={setStatus} todos={todos} SetTodos={SetTodos} inputText={inputText} SetInputText={SetInputText}/>
    <Todolist filteredTodos={filteredTodos} todos={todos} SetTodos={SetTodos} />
    </div>
  );
}

export default App;
