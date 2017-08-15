import { createStore } from 'redux';
import actions from '../constants/constants'
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from './actions'

const taskReducer = (store = [], action) => {
    switch (action.type) {
        case actions.ADD_TASK:
            return [...store, {
               description: action.description,
                value: action.value,
                effort: action.effort,
                id: action.id
            }];
        case actions.DELETE_TASK:
            return store.filter((task) => {
                return task.id !== action.id;
            });
        case actions.EDIT_TASK:
            return store.map((task) => {
                if (task.id === action.id) {
                    return {
                        description: action.description,
                        value: action.value,
                        effort: action.effort,
                        id: action.id
                    }
                } else {
                    return task;
                }
            });
        default:
            return store;
    }
};

let store = createStore(taskReducer);

export default store;


