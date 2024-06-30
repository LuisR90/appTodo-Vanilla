import TaskComplete from './TaskComplete';

function Header( ): string {

    return (`
        <h1>App To-Do <span id="CompleteTask">${ TaskComplete() }</span></h1>
    `)
}

export default Header