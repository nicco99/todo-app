import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddTodo({ handleUpdate, todoslength }) {
  const [todoData, settodoData] = useState({});
  const redirectUser = useNavigate();
  function handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    console.log(`the value is ${name}`);
    settodoData({ ...todoData, [name]: value });
  }
  console.log(todoData);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    redirectUser("/todo");
    handleUpdate();
  }

  return (
    <>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/todo">Todos</Link>
      </button>
      <form onSubmit={handleSubmit}>
        <label>
          task:
          <input onBlur={handleInput} type="text" name="task" required />
        </label>
        <br></br>
        <label>
          category:
          <input onBlur={handleInput} type="text" name="category" required />
        </label>
        <br></br>
        <label>
          due_Date:
          <input onBlur={handleInput} type="text" name="date" required />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default AddTodo;
