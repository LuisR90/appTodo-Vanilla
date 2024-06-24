import './style.css'

import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

import Render from './Render';

const MINUTE = 60000

setInterval( () => {
    Render( '.task-list', TaskList() )
}, MINUTE * 1)

const renderData = `
    ${ Header() }

    ${ TaskForm() }

    ${ TaskList() }
`

Render( '#app', renderData )