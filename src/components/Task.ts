interface TaskObject {
    id: number,
    title: string,
    time: number,
    complete: boolean
}

import Utility from '../utility';

function Task( data:TaskObject ) {

    const { id, title, time, complete } = data
    const styleComplete = complete ? 'task-complete' : ''

    return(`
        <article class="${ styleComplete }" id="task-${ id }" >
            <div class="task-options">
                <a href="#" id="btnComplete" data-id="${ id }">✔</a>
                <a href="#" id="btnRemove" data-id="${ id }">✗</a>
            </div>
            <h5>${ title }</h5>
            <p>${ Utility.timeConverter( time ) }</p>
        </article>
    `)
}

export default Task