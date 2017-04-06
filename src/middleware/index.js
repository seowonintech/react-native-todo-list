import * as actions from '../action/action'

export const pushMiddleware = store => next => action => {
    if (action.type == actions.ADD_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        dbRef.push({
            text: action.text,
            complete: false,
        });
    }
    return next(action);
}

export const updateMiddleware = store => next => action => {
    if (action.type == actions.TOGGLE_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.update({
            complete: !action.todo.complete,
        });
    }

    if (action.type == actions.MODIFY_TODO_TEXT) {
        console.warn('[KangLOG] Modify text!: ');
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.update({
            text: action.todo.text,
        });
    }
    return next(action);
}

export const deleteMiddleware = store => next => action => {
    if (action.type == actions.DELETE_TODO) {
        var dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        var childRef = dbRef.child(action.todo.key);
        childRef.remove();
    }
    return next(action);
}