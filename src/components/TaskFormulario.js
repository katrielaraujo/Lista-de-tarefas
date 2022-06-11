import React from 'react';
import '../stylesheets/TaskFormulario.css';

function TaskFormulario(props){
    return (
        <form className='task-formulario'>
            <input
            className='task-input'
            type='text'
            placeholder='Escreve uma Task'
            name='texto'
            />
            <button className='task-button'>
                Adicionar Tarefa
            </button>
        </form>
    );
}

export default TaskFormulario;