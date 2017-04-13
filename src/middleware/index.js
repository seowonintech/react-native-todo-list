import * as actions from '../action/action'

export const FirebaseMiddleware = store => next => action => {
    var dbRef;
    var childRef;

    if (action != undefined) {
        dbRef = store.getState().RdcManipulateTodos.database.ref("todo");
        childRef = dbRef.child(action.todo.key);
    }
    else {
        return next(action);
    }

    switch (action.type) {
        case actions.ADD_TODO:
            dbRef.push({
                text: action.text,
                complete: false,
            });

        case actions.TOGGLE_TODO:
            childRef.update({
                complete: !action.todo.complete,
            });

        case actions.DELETE_TODO:
            childRef.remove();

        case actions.MODIFY_TODO_TEXT:
            childRef.update({
                text: action.todo.text,
            });

    }
    return next(action);
}