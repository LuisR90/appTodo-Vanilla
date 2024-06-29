interface TaskObject {
    id: number,
    title: string,
    time: number,
    complete: boolean,
    edit: boolean
    editTime: number
}

interface TaskArray extends Array<TaskObject>{}

let DATA_TASK:TaskArray = []
const LOCAL_TASK = 'allTask';

const localStorage = window.localStorage
const emptyLocal = localStorage.getItem( LOCAL_TASK ) === null

if( !emptyLocal )
    getLocalData()

function getLocalData( ):void {
    const data = localStorage.getItem( LOCAL_TASK )
    DATA_TASK = JSON.parse( data === null ? '' : data )
}

function setLocalData( ):void {
    const data = JSON.stringify( DATA_TASK )
    localStorage.setItem( LOCAL_TASK, data )
}

function getTasks( ): TaskArray {
    return DATA_TASK;
}

function tasksComplete( ): number {
    return DATA_TASK.filter( task => task.complete === false ).length
}

function newTask( save :TaskObject ):void {
    DATA_TASK.push( save )
    setLocalData()
}

function removeTask( idTask:number ):void {
    const id = DATA_TASK.findIndex( task => task.id === idTask )
    DATA_TASK.splice( id, 1)
    setLocalData()
}

function setTitleTask( idTask: number, value: string ):void {
    const id = DATA_TASK.findIndex( task => task.id === idTask )
    DATA_TASK[id].title = value
    DATA_TASK[id].edit = true
    DATA_TASK[id].editTime = Date.now()
    setLocalData()
}

function isTaskComplete( idTask:number ): boolean {
    const id = DATA_TASK.findIndex( task => task.id === idTask )
    return DATA_TASK[id].complete
}

function setTaskComplete( idTask:number, value:boolean ): void {
    const id = DATA_TASK.findIndex( task => task.id === idTask )
    DATA_TASK[id].complete = value
    setLocalData()
}

function clearAllTasks( ): void {
    if(!localStorage.getItem( LOCAL_TASK )?.length)
        return

    DATA_TASK = []
    localStorage.removeItem( LOCAL_TASK )
}

function clearCompleteTasks( ):void {
    if(!localStorage.getItem( LOCAL_TASK )?.length)
        return

    DATA_TASK = DATA_TASK.filter( task => task.complete === false)

    const data = JSON.stringify( DATA_TASK )
    localStorage.setItem( LOCAL_TASK, data )
}

export default { getLocalData, setLocalData, getTasks, tasksComplete, newTask, removeTask, setTitleTask, isTaskComplete, setTaskComplete, clearAllTasks, clearCompleteTasks }