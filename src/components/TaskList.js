import React, { useState } from 'react';
import TaskFormulario from './TaskFormulario';
import Task from './Task';
import '../stylesheets/TaskList.css';

function TaskList(){

    const [tasks,setTasks] = useState([]);

    const addTask = task => {
       if(task.texto.trim()){
        task.texto = task.texto.trim();
        const tasksUpdated = [task,...tasks];
        setTasks(tasksUpdated);
       }
    }

    const eliminarTask = id => {
        const tasksUpdated = tasks.filter(task => task.id !== id);
        setTasks(tasksUpdated);
    }

    const completarTask = id => {
        const tasksUpdated = tasks.map(task => {
            if(task.id === id){
                task.completada = !task.completada;
            }
            return task;
        });
        setTasks(tasksUpdated);
    }


    return (
        <>
            <TaskFormulario onSubmit={addTask}/>
            <div className='container-task-list'>
                {
                    tasks.map((task) => 
                    <Task
                    key={task.id}
                    id={task.id}
                    texto={task.texto}
                    completada={task.completada}
                    completarTask={completarTask}
                    eliminarTask={eliminarTask}
                    />
                    )
                }
            </div>
        </>
    );
}

export default TaskList;