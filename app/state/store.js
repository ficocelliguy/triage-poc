import { createStore } from 'redux';
import constants from '../constants/constants'
import {getNextId} from './id';

const taskReducer = (store = [], action) => {
    console.log(store);
    switch (action.type) {
        case constants.ADD_TASK:
            return [...store, {
               description: action.description,
                value: action.value,
                effort: action.effort,
                id: getNextId(),
                editing: true
            }];
        case constants.DELETE_TASK:
            return store.filter((task) => {
                return task.id !== action.id;
            });
        case constants.EDIT_TASK:
            return store.map(({ description, value, effort, id, editing }) => {
                return {
                    description: description,
                    value: value,
                    effort: effort,
                    id: id,
                    editing: id === action.id ? action.editing : editing
                }
            });
        case constants.UPDATE_TASK:
            return store.map((task) => {
                if (task.id === action.id) {
                    return {
                        description: action.description,
                        value: action.value,
                        effort: action.effort,
                        id: action.id,
                        editing: task.editing
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


