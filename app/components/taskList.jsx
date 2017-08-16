import React from 'react';
import { ADD_TASK, DELETE_TASK } from '../state/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Task from './task.jsx';


const TaskList = ({ tasks = [], ADD_TASK, DELETE_TASK }) =>
    <div className="taskList">
        <button className="AddNew" onClick={ ADD_TASK }>+</button>
        <ul>
            {tasks.map(({ description, value, effort, id, editing }) =>
                <li key={id}>
                    <Task description={description}
                          value={value}
                          effort={effort}
                          id={id}
                          editing={editing}
                    />
                    <button onClick={ () => { DELETE_TASK(id) }}>X</button>
                </li>
            )}
        </ul>
    </div>
;


export default connect(
    (store) => ({tasks: store}),
    (dispatch) => bindActionCreators({ ADD_TASK, DELETE_TASK }, dispatch )
)(TaskList);