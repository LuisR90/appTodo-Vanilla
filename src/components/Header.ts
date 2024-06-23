import data from '../data';

import Render from '../Render';
import TaskComplete from './TaskComplete';
import TaskList from './TaskList';

function Header( ) {

    function initialize( ) 
    {
        const taskForm = document.querySelector<HTMLFormElement>('form')
        taskForm?.addEventListener('submit', formSubmit)

        function formSubmit( e:SubmitEvent ) {
            e.preventDefault()

            let value = document.querySelector<HTMLInputElement>('input[name="taskAdd"')?.value
            value = value?.trim();
    
            if( value === undefined || value === '' || value.length < 3 ) 
                return;
    
            data.newTask( { title: value, time: Date.now(), complete: false } )

            taskForm?.reset()

            renderComponents()
        }

        const btnComplete = document.querySelector<HTMLButtonElement>('#clearComplete')
        btnComplete?.addEventListener('click', () => {
            data.clearCompleteTasks()

            renderComponents()
        })

        const btnClear = document.querySelector<HTMLButtonElement>('#clearAll')
        btnClear?.addEventListener('click', () => {
            data.clearAllTasks()

            renderComponents()
        })

        function renderComponents( ) {
            // Render
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

export default Header