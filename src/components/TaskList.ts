import data from '../data';

import Task from '../components/Task';
import TaskButtons from '../components/TaskButtons';
import TaskEdit from './TaskEdit';

function TaskList( ): string {

    const dataTasks = data.getTasks()

    let allTasks:string = ''
    for (let index = dataTasks.length-1; index >= 0; index--) {
        const task = dataTasks[index];
        allTasks += Task( { id: index, ...task })
    }
    
    TaskButtons()
    TaskEdit()

    const noTasks = `
        <div class="dontTasks">There are no tasks</div>
    `

    return (`
        <div class="task-list">
            ${ dataTasks.length ? allTasks : noTasks }
        </div>
    `)
}

export default TaskList