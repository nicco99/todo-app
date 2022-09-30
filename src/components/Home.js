import { Link } from "react-router-dom";

function Home() {
    return(
        <>
        <h1>tuko home page</h1>
        <button>
            <Link to="addTodo">
            add a todo
            </Link>
        </button>
        <button>
            <Link to="todo">
            view my todos
            </Link>
        </button>
        </>
    )
}


export default Home;