import { TaskArray } from '../utilitys/myInterfaces';

import data from '../data';

import Task from '../components/Task';
import TaskButtons from '../components/TaskButtons';
import TaskEdit from './TaskEdit';

function TaskList( ): string {

    const dataTasks = data.getTasks()

    let tasksComplete = dataTasks.filter( task => task.complete === true )
    let tasksNotComplete = dataTasks.filter( task => task.complete === false)
    
    TaskButtons()
    TaskEdit()

    const noTasks = `
        <div class="dontTasks">There are no tasks</div>
    `

    return (`
        <div class="task-list">
            ${ dataTasks.length ? getList( tasksNotComplete ) : noTasks }
            ${ dataTasks.length ? getList( tasksComplete ) : '' }
        </div>
    `)
}

function getList( tasks: TaskArray ):string {

    let taskList:string = ''
    for (let index = tasks.length-1; index >= 0; index--) {
        const task = tasks[index];
        taskList += Task( { ...task })
    }

    return taskList
}

export default TaskList