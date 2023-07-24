import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";

const TodoDetails = () => {
    const { id } = useParams();
    const {data:todo , error , isPending} = useFetch('http://localhost:8000/todos/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/todos/' + todo.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="todo-details">
            {isPending &&
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            {error && <div>{error}</div>}
            {todo && (
                <article>
                    <h2>{todo.title}</h2>
                    <p>written by :{todo.author}</p>
                    <div>{todo.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default TodoDetails;


