import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SingleTodo from "./components/SingleTodo";

function App() {
  const [mytodos, setmytodos] = useState([]);
  const [update, setUpdate] = useState(true);
  const [todoslength, setTodoLength] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setmytodos((mytodos) => data);
        setTodoLength((todoslength) => (data.length +=1));
      });
  }, [update]);

  let todos = mytodos.map((todo, index) => (
    <TodoList key={index} todo={todo} todoId={todo.id}/>
  ));

  function handleUpdate() {
    setUpdate((update) => !update);
  }

  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" >
          <Route index element={todos} />
          <Route path=":taskId" element={<SingleTodo/>}/>
        </Route>
        <Route
          path="/addTodo"
          element={
            <AddTodo todoslength={todoslength} handleUpdate={handleUpdate} />
          }
        />
      </Routes>
    
  );
}

export default App;
