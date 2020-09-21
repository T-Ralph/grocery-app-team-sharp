// Action to add ingredients to shopping list
const addAction = addContent => {
    return {
        type: 'ADD_ACTION',
        payload: addContent
    };
}

// Action to remove ingredients from shopping list
const removeAction = id => {
    return {
        type: 'REMOVE_ACTION',
        payload: id
    };
}

export { addAction, removeAction };