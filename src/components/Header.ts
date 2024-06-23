import TaskComplete from './TaskComplete';

function Header( ): string {

    return (`
        <h1>AppTodo <span id="CompleteTask">${ TaskComplete() }</span></h1>
    `)
}

export default Header