import React from 'react';
import { render } from 'react-dom';
import TaskList from './components/taskList.jsx';
import { Provider } from 'react-redux';
import store from './state/store';

render(
    <Provider store={store}>
        <TaskList />
    </Provider>,
    document.getElementById('app')
);