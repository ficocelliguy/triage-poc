import constants from '../constants/constants'

export function ADD_TASK ({description = "New Task", value = 1, effort = 1}) {
    return {
        type: constants.ADD_TASK,
        description,
        value,
        effort
    }
}

export function DELETE_TASK (id)  {
    return {
        type: constants.DELETE_TASK,
        id
    }
}

export function EDIT_TASK (id, editing) {
    return {
        type: constants.EDIT_TASK,
        id,
        editing
    }
}

export function UPDATE_TASK (description, value, effort, id) {
    return {
        type: constants.UPDATE_TASK,
        description,
        value,
        effort,
        id
    }
}
