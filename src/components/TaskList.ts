import data from '../data';

import Task from '../components/Task';
import TaskButtons from '../components/TaskButtons';
import TaskEdit from './TaskEdit';

function TaskList( ): string {

    const dataTasks = data.getTasks()

    let tasksComplete = dataTasks.filter( task => task.complete === true )
    let tasksNotComplete = dataTasks.filter( task => task.complete === false)

    let alltasksNotComplete:string = ''
    for (let index = tasksNotComplete.length-1; index >= 0; index--) {
        const task = tasksNotComplete[index];
        alltasksNotComplete += Task( { ...task })
    }

    let alltasksComplete:string = ''
    for (let index = tasksComplete.length-1; index >= 0; index--) {
        const task = tasksComplete[index];
        alltasksComplete += Task( { ...task })
    }
    
    TaskButtons()
    TaskEdit()

    const noTasks = `
        <div class="dontTasks">There are no tasks</div>
    `

    return (`
        <div class="task-list">
            ${ dataTasks.length ? alltasksNotComplete : noTasks }
            ${ dataTasks.length ? alltasksComplete : '' }
        </div>
    `)
}

export default TaskList