import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleTodo() {
  const singleOne = useParams();
  const [oneTodo, setOneTodo] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/todos/${singleOne.taskId}`)
      .then((res) => res.json())
      .then((data) => setOneTodo(oneTodo => data));
  }, []);
  console.log(oneTodo);
  return (
    <>
      <h2>THIS IS OUR SINGLE TASK</h2>
      <button>
        <Link to="/todo">Back</Link>
      </button>
      <button>
        <Link to="/">Home</Link>
      </button>

      <h3>
        task: <b>{oneTodo.task}</b>
      </h3>
      <h3>
        category: <b>{oneTodo.category}</b>
      </h3>
      <h3>
        Date: <b>{oneTodo.date}</b>
      </h3>
    </>
  );
}

export default SingleTodo;
