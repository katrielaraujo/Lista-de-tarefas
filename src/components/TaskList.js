import React, { useState } from 'react';
import TaskFormulario from './TaskFormulario';
import Task from './Task';
import '../stylesheets/TaskList.css';

function TaskList(){

    const [tasks,setTask] = useState([]);


    return (
        <>
            <TaskFormulario/>
            <div className='container-task-list'>
                {
                    tasks.map((task) => 
                    <Task
                    texto={task.texto}
                    completada={task.completada}
                    />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;