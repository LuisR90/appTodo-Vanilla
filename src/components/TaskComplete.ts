import data from '../data';

function TaskComplete( ):string {
    return (`${ data.tasksComplete() }`)
}

export default TaskComplete