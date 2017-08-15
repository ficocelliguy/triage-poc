import store from './state/store'

import { ADD_TASK, EDIT_TASK, DELETE_TASK } from './state/actions'

export default (text = 'hello world') => {
    const element = document.createElement('div');

    element.innerHTML = text;


    store.dispatch(ADD_TASK(
        "New Task",
        1,
        2,
        0
    ));

    store.dispatch(ADD_TASK(
        "Another New Task",
        4,
        5,
        1
    ));

    console.log(store.getState());

    store.dispatch(EDIT_TASK(
        "An Edited Task",
        9,
        3,
        0
    ));

    console.log(store.getState());

    store.dispatch(DELETE_TASK(1));

    console.log(store.getState());

    return element;
}