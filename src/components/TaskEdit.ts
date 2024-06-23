import data from '../data';

let inpTasks:NodeListOf<HTMLInputElement>
let isEdit = false

function TaskEdit( ):void {

    setTimeout( () => {
        inpTasks = document.querySelectorAll<HTMLInputElement>('.inpTask')
        hookInputsEvent()
    }, 100)

    function hookInputsEvent( ):void {
        if( inpTasks === undefined )
            return;

        inpTasks.forEach( inp => inp.removeEventListener('dblclick', inputdbClick) )
        inpTasks.forEach( inp => inp.addEventListener('dblclick', inputdbClick) )
    }

    function inputdbClick( event ):void {
        if( isEdit )
            return 

        const element = event?.target
        isEdit = true
        setStyleEditOn( element )

        element.removeEventListener('keypress', inputEnterEvent )
        element.addEventListener('keypress', inputEnterEvent )

        element.removeEventListener('focusout', setStyleEditOff)
        element.addEventListener('focusout', setStyleEditOff)
    } 

    function changeTaskTitle( input:HTMLInputElement ):void {
        const idTask = Number(input.getAttribute('data-id'))
        const value = input.value.trim()
        const oldValue = data.getTasks()[idTask].title

        if( value === undefined || value === '' || value.length < 3 || oldValue === value ) 
            input.value = oldValue
        else {
            data.setTitleTask(idTask, value)
            input.value = value
        }
    }

    function setStyleEditOn( input:HTMLInputElement ):void {
        input.className = 'inpTask input-editing'
        input.readOnly = false
    }

    function inputEnterEvent( event ):void {
        const element:HTMLInputElement = event.target

        if( event.key === 'Enter') {
            setStyleEditOff( event )
            changeTaskTitle( element )
            return
        }
    } 

    function setStyleEditOff( event ):void {
        const element:HTMLInputElement = event.target

        element.className = 'inpTask'
        element.readOnly = true
        isEdit = false

        changeTaskTitle( element)
    }
}

export default TaskEdit