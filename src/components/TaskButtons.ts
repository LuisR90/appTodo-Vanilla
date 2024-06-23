import data from '../data';
import Render from '../Render';

import TaskComplete from '../components/TaskComplete';
import TaskList from '../components/TaskList';

var btnComplete:NodeListOf<Element>
var btnRemove:NodeListOf<Element>

function TaskButtons( ):void {

    removeButtonsEvents( )
    setTimeout( () => {
        btnComplete = document.querySelectorAll('#btnComplete')
        btnRemove = document.querySelectorAll('#btnRemove')
        hookButtonsEvents()
    }, 100)

    function removeButtonsEvents() {
        if(btnRemove === undefined && btnComplete === undefined)
            return

        btnComplete.forEach( btn => btn.removeEventListener('click', event => setTaskComplete( event, btn)) )
        btnRemove.forEach( btn => btn.removeEventListener('click', event => removeTask(event, btn)) )
    }

    function hookButtonsEvents( ) {
        if(btnRemove.length === 0 && btnComplete.length === 0)
            return

        btnComplete.forEach( btn => btn.addEventListener('click', event => setTaskComplete(event, btn)) )
        btnRemove.forEach( btn => btn.addEventListener('click', event => removeTask(event, btn)) )
    }

    function setTaskComplete( event:Event, btn:Element ):void {

        event.preventDefault()
        const idTask = Number( btn.getAttribute('data-id') )
        const idElement = document.querySelector<HTMLElement>(`#task-${idTask}`)

        if(!idElement)
            return

        const isComplete = data.isTaskComplete(idTask)
        data.setTaskComplete(idTask, !isComplete)
        data.setLocalData()

        const setStyle = !isComplete ? 'task-complete' : ''
        idElement.setAttribute('class', setStyle)
        
        // Render TaskList
        Render( '.task-list', TaskList() )
        
        // Render taskComplete
        Render( '#CompleteTask', TaskComplete())        
    }

    function removeTask( event: Event, btn: Element ):void {

        event.preventDefault()
        const idTask = Number( btn.getAttribute('data-id') )

        data.removeTask(idTask)

        // Render TaskList
        Render( '.task-list', TaskList())

        // Render taskComplete
        Render( '#CompleteTask', TaskComplete())
    }
}

export default TaskButtons