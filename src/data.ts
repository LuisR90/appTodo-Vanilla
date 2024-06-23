interface TaskObject {
    title: string,
    time: number,
    complete: boolean
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
    DATA_TASK.splice( idTask, 1)
    setLocalData()
}

function setTitleTask( idTask: number, value: string ):void {
    DATA_TASK[idTask].title = value
    setLocalData()
}

function isTaskComplete( idTask:number ): boolean {
    return DATA_TASK[idTask].complete
}

function setTaskComplete( idTask:number, value:boolean ): void {
    DATA_TASK[idTask].complete = value
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