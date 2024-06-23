import './style.css'

import Header from './components/Header';
import TaskList from './components/TaskList';
import taskComplete from './components/TaskComplete';

import Render from './Render';

const renderData = `
    <h1>AppTodo <span id="CompleteTask">${ taskComplete() }</span></h1>

    ${ Header() }

    ${ TaskList() }
`

Render( '#app', renderData )