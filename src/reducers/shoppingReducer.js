import { v4 as uuidv4 } from 'uuid';

const shoppingReducer = ( state = [] , action ) => {
    
    switch ( action.type ) {
        case 'ADD_ACTION':
            const newIngredient = {
                id: uuidv4(),
                ingredient: action.payload
            }
            const newShoppingList = [...state];
            newShoppingList.push(newIngredient);
            return newShoppingList;
        case 'REMOVE_ACTION':
            // Citation: Warren Uhrich - class notes (React/Redux to-do list)
            // Below line of code is the same as what we used in class to remove an item with a specific id from a to-do list
            const updatedShoppingList = state.filter( ingredient => ingredient.id !== action.payload );
            return updatedShoppingList;
        default:
            return state;
    }
}

export default shoppingReducer;