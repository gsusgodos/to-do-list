import { useState, useEffect } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/tasks', {
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error('Error al cargar tareas');
            const data = await response.json();
            setTasks(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const addTask = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        try {
            const response = await fetch('http://127.0.0.1:8000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ title, description })
            });
            if (!response.ok) throw new Error('Error al crear tarea');
            const newTask = await response.json();
            setTasks([...tasks, newTask]);
            setTitle('');
            setDescription('');
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleComplete = async (id, completed) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ completed: !completed })
            });
            if (!response.ok) throw new Error('Error al actualizar tarea');
            const updatedTask = await response.json();
            setTasks(tasks.map(task => task.id === id ? updatedTask : task));
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteTask = async (id) => {
        if (!window.confirm('¿Eliminar esta tarea?')) return;
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
                method: 'DELETE',
                headers: { 'Accept': 'application/json' }
            });
            if (!response.ok) throw new Error('Error al eliminar tarea');
            setTasks(tasks.filter(task => task.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px', fontFamily: 'Arial' }}>
            <h1>Lista de Tareas</h1>

            {error && <div style={{ color: 'red', background: '#fee', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>{error}</div>}

            <form onSubmit={addTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Titulo"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minWidth: '200px' }}
                />
                <input
                    type="text"
                    placeholder="Descripcion"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', minWidth: '200px' }}
                />
                <button type="submit" style={{ padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Agregar
                </button>
            </form>

            {tasks.length === 0 ? (
                <p style={{ color: '#999', textAlign: 'center', marginTop: '40px' }}>No hay tareas. Crea una nueva!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {tasks.map(task => (
                        <li key={task.id} style={{ background: '#f9f9f9', margin: '10px 0', padding: '15px', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderLeft: task.completed ? '4px solid #28a745' : '4px solid #007bff' }}>
                            <div style={{ flex: 1 }}>
                                <strong style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#999' : '#000' }}>
                                    {task.title}
                                </strong>
                                {task.description && <p style={{ margin: '5px 0 0', color: '#555' }}>{task.description}</p>}
                            </div>
                            <div>
                                <button
                                    onClick={() => toggleComplete(task.id, task.completed)}
                                    style={{ marginRight: '10px', padding: '5px 10px', background: task.completed ? '#ffc107' : '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    {task.completed ? 'Desmarcar' : 'Completar'}
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    style={{ padding: '5px 10px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App;
