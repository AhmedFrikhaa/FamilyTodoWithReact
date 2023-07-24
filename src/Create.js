import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mom');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const todo = {title, body, author};
        fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(todo)
        }).then(() => {
            console.log('new todo added');
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h1>Add a New Todo</h1>
            <form onSubmit={handleSubmit}>
                <label>Todo title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Todo body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>
                <label>Todo author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Mom">Mom</option>
                    <option value="Dad">Dad</option>
                    <option value="Ahmed">Ahmed</option>
                    <option value="Ismail">Ismail</option>
                    <option value="Adam">Adam</option>
                </select>
                {!isPending &&<button>Add Todo</button >}
                {isPending && <button disabled><div className="spinner-border" role="status">
                    <span className="visually-hidden">Adding The Todo...</span>
                </div></button>}
            </form>
        </div>
    );
}

export default Create;


