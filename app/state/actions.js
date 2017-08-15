import actions from '../constants/constants'

export function ADD_TASK (description, value, effort, id) {
    return {
        type: actions.ADD_TASK,
        description,
        value,
        effort,
        id
    }
}

export function DELETE_TASK (id)  {
    return {
        type: actions.DELETE_TASK,
        id
    }
}

export function EDIT_TASK (description, value, effort, id) {
    return {
        type: actions.EDIT_TASK,
        description,
        value,
        effort,
        id
    }
}