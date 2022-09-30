
import { Link } from "react-router-dom";
function TodoList({ todo, todoId }) {
  console.log(todoId)
  return (
    <>
  
      <ul>
        <p>{todo.task}</p>
        <p>{todo.category}</p>
        <p>{todo.date}</p>
      </ul>
      <button>
        <Link to={`${todoId}`}>
          view todo
        </Link>
      </button>
      <hr></hr>
    </>
  );
}

export default TodoList;
