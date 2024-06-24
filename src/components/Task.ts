interface TaskObject {
    id: number
    title: string,
    time: number,
    complete: boolean,
    edit: boolean
    editTime: number
}

import Utility from '../utility';
import '../style-input.css';

import EditTaskSvg from '../svgs/EditTask';
import TimeStartSvg from '../svgs/TimeStart';

function Task( data:TaskObject ): string {

    const { id, title, time, complete, edit, editTime } = data
    const styleComplete = complete ? 'task-complete' : ''

    const infoTime = `Created ${ Utility.getTime( time ) }`

    const isEdit = edit 
    const infoEdit = `Edited ${ Utility.getTime(editTime) }`

    return(`
        <article class="${ styleComplete }" id="task-${ id }" >
            <div class="task-options">
                <a href="#" id="btnComplete" data-id="${ id }">✔</a>
                <a href="#" id="btnRemove" data-id="${ id }">✗</a>
            </div>

            <input 
                type="text" 
                class="inpTask"
                data-id="${ id }"
                value="${ title }" 
                readonly
            />
            <ul class="task-info">
                <li> ${ TimeStartSvg(12)} ${ infoTime }</li>
                ${ isEdit ? `<li>${ EditTaskSvg(12) } ${ infoEdit } </li>` : ''  }
            </ul>

  
        </article>
    `)
}

export default Task