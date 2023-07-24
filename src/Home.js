import TodoList from "./TodoList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: todos, isPending, error} = useFetch('http://localhost:8000/todos');
    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending &&
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            }
            {todos && <TodoList todos={todos} title="All Todos!"/>}
        </div>
    );
}

export default Home;


