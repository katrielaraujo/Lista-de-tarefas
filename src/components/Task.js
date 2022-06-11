import React from 'react';
import '../stylesheets/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Task({ id, texto, completada, completarTask, eliminarTask }){
    return (
        <div className={completada?'task-container completada':'task-container'}>
            <div 
            className='task-text'
            onClick={() => completarTask(id)}>
                {texto}
            </div>
            <div 
            className='task-container-icons'
            onClick={() => eliminarTask(id)}>
                <AiOutlineCloseCircle className='task-icon'/>
            </div>
        </div>
    )
}

export default Task;