import React from 'react';
import { EDIT_TASK, UPDATE_TASK } from '../state/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Task = ( { description, value, effort, id, editing, EDIT_TASK, UPDATE_TASK } ) => {
    if (editing) {
        let editedDescription = description;
        let editedValue = value;
        let editedEffort = effort;
        return <div className="editing task">
            <label>Task:
                <input
                name="editDescription"
                type="text"
                autoFocus={true}
                defaultValue={description}
                onChange={(e) => {
                    editedDescription = e.target.value
                }}
                />
            </label>
            <button onClick={() => {
                UPDATE_TASK(editedDescription, value, effort, id);
                EDIT_TASK(id, false);
            }}>Done</button>
        </div>
    } else {
        return <div className="task">
            <div>Task: {description}</div>
            <div>Value: {value}</div>
            <div>Effort: {effort}</div>
            <button onClick={() => {
                EDIT_TASK(id, true)
            }}>...
            </button>
        </div>
    }
};

export default connect(
    (store) => ({task: store}),
    (dispatch) => bindActionCreators({ EDIT_TASK, UPDATE_TASK }, dispatch )
)(Task);
