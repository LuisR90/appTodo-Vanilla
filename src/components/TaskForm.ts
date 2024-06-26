import data from '../data';

import Render from '../Render';
import TaskComplete from './TaskComplete';
import TaskList from './TaskList';

function TaskForm( ): string {

    function initialize( ): void  {
        const taskForm = document.querySelector<HTMLFormElement>('form')
        taskForm?.addEventListener('submit', formSubmit)

        function formSubmit( e:SubmitEvent ): void {
            e.preventDefault()

            const inputElement = document.querySelector<HTMLInputElement>('input[name="taskAdd"')
            const value = inputElement?.value.trim();
    
            if( value === undefined || value === '' || value.length < 3 ) {
                inputElement?.classList.add('task-edit-error')
                setTimeout( () => {
                    inputElement?.classList.remove('task-edit-error')    
                }, 400)
                
                return;
            }
    
            data.newTask( { 
                id: Number(data.getTasks().length)+1,
                title: value, 
                time: Date.now(), 
                complete: false, 
                edit: false, 
                editTime: 0
            } )

            taskForm?.reset()

            renderComponents()
        }

        const btnComplete = document.querySelector<HTMLButtonElement>('#clearComplete')
        btnComplete?.addEventListener('click', ():void => {
            data.clearCompleteTasks()

            renderComponents()
        })

        const btnClear = document.querySelector<HTMLButtonElement>('#clearAll')
        btnClear?.addEventListener('click', ():void => {
            data.clearAllTasks()

            renderComponents()
        })

        function renderComponents( ):void {
            // Render TaskList
            Render( '.task-list', TaskList() )

            // Render TaskComplete
            Render( '#CompleteTask', TaskComplete())
        }
    } 

    document.addEventListener('DOMContentLoaded', initialize)

    return (`
        <header>
            <form>
                <input 
                    type="text"
                    name="taskAdd" 
                    placeholder="Add task..."
                >
            </form>
            <div class="task-buttons">
                <button id="clearComplete">Clear task complete</button>
                <button id="clearAll">Clear all task</button>
            </div>
        </header>
    `)
}

export default TaskForm