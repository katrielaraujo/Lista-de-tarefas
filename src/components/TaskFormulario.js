import React,{ useState } from 'react';
import '../stylesheets/TaskFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TaskFormulario(props){

    const [input,setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleDispatch = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(newTask);
    }

    return (
        <form className='task-formulario'
        onSubmit={handleDispatch}>
            <input
            className='task-input'
            type='text'
            placeholder='Escreve uma Task'
            name='texto'
            onChange={handleChange}
            />
            <button className='task-button'>
                Adicionar Tarefa
            </button>
        </form>
    );
}

export default TaskFormulario;