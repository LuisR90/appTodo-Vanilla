import data from '../data';
import Render from '../Render';
import TaskList from './TaskList';

let inpTasks:NodeListOf<HTMLInputElement>
let isEdit = false

function TaskEdit( ):void {

    setTimeout( () => {
        if( inpTasks !== undefined ) {
            inpTasks.forEach( inp => inp.removeEventListener('dblclick', inputdbClick) )
        }

        inpTasks = document.querySelectorAll<HTMLInputElement>('.inpTask')
        inpTasks.forEach( inp => inp.addEventListener('dblclick', inputdbClick) )
    }, 100)

    function inputdbClick( event ):void {
        if( isEdit )
            return 

        const element = event?.target
        setStyleEditOn( event )

        element.addEventListener('keypress', inputEnterEvent )
        element.addEventListener('focusout', inputFocusOutEvent )
    }
    
    function setStyleEditOn( event ):void {
        const element:HTMLInputElement = event.target

        element.className = 'inpTask input-editing'
        element.readOnly = false
        isEdit = true
    }

    function setStyleEditOff( event ):void {
        const element:HTMLInputElement = event.target

        element.className = 'inpTask'
        element.readOnly = true
        isEdit = false
    }

    function inputEnterEvent( event ):void {
        const element:HTMLInputElement = event.target

        if( event.key === 'Enter') {
            setStyleEditOff( event )
            removeEvents( event )
            changeTaskTitle( element )
            return
        }
    } 

    function inputFocusOutEvent( event ):void {
        const element:HTMLInputElement = event.target

        setStyleEditOff( event )
        removeEvents( event )
        changeTaskTitle( element )        
    }

    function changeTaskTitle( input:HTMLInputElement ):void {
        const idTask = Number(input.getAttribute('data-id'))
        const value = input.value.trim()
        const id = data.getTasks().findIndex( task => task.id === idTask )
        const oldValue = data.getTasks()[id].title

        if( value === undefined || value === '' || value.length < 3 || oldValue === value ) {
            input.value = oldValue
            const element = document.querySelector<HTMLElement>(`#task-${idTask}`)
            element?.classList.add('task-edit-error')
            setTimeout(() => {
                element?.classList.remove('task-edit-error')
            }, 400)
        }
        else {
            data.setTitleTask(idTask, value)
            input.value = value
        }
        
        // Render TaskList
        setTimeout(() => {
            Render( '.task-list', TaskList() )
        }, 500)
    }

    function removeEvents( event ):void {
        const element:HTMLInputElement = event.target
        element.removeEventListener('keypress', inputEnterEvent )
        element.removeEventListener('focusout', setStyleEditOff )
    }
}

export default TaskEdit

