//Import React
import React from 'react';
// Import useSelector so we can display global state 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeAction } from '../actions/shoppingAction';

//Declare Function
function ShoppingList() {

    // useDispatch hook is used to update global state
    const dispatch = useDispatch();

    const deleteShoppingListItem = (id) => {
        // shoppingReducer global state gets updated with new listitem
         dispatch(removeAction( id )); 
    }

    // shoppingList is declared as the shoppingReducer global state
    const shoppingList = useSelector( state => state.shoppingReducer );
    // We loop through our shoppingList and make each ingredient a list item to be displayed in an unordered list in the cart section
    const currentShoppingList = shoppingList.map( ingredient => 
        <tr key={ingredient.id}>
            <td>{ingredient.ingredient.measure} {ingredient.ingredient.ingredient} ({ingredient.ingredient.meal})
            </td>
            <td>
                <button className="table-button" onClick={() => deleteShoppingListItem(ingredient.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr> );

    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-shopping-cart"></i>
                        Shopping List
                    </h2>
                 
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Item
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentShoppingList}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Item
                                </th>
                                <th>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </section>
            </main>
        </>
    );
}

//Export Function
export default ShoppingList;