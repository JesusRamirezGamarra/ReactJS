import React, { Fragment, useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoList } from "./components/TodoList";
import './css/App.css'
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";//importar para bootstrap 
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/inicio'
import Hombres from './components/paginas/hombres'
import Mujeres from './components/paginas/mujeres'
import Boys from './components/paginas/boys'
import Girls from './components/paginas/girls'
// import Items from './components/paginas/items'


const KEY = "todoApp.todos";

export function App() {
  const todoTaskRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
   
    
      <Fragment>

      <div className="App">
        {/* <h1>Navbar v3.0</h1> */}
        <Router>
          <Navbar />
        </Router>
        <Router>
        <Routes>
            <Route path='/' exac compoenenter={Inicio}/>
            <Route path='/hombres' exac compoenenter={Hombres}/>
            <Route path='/mujeres' exac compoenenter={Mujeres}/>
            <Route path='/boys' exac compoenenter={Boys}/>
            <Route path='/girls' exac compoenenter={Girls}/>
          </Routes>
        </Router>
      </div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
      <button onClick={handleTodoAdd}>Añadir</button>
      <button onClick={handleClearAll}>Eliminar</button>
      <div>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        terminar
      </div>
    </Fragment>
  );
}