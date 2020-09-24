//Import React
import React from 'react';

// Import useSelector so we can display global state 
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeAction, removeAllAction } from '../actions/shoppingAction';
import AddNewIngredient from './AddNewIngredient';
import printJS from 'print-js';


//Declare Function
function ShoppingList() {

    // useDispatch hook is used to update global state
    const dispatch = useDispatch();

    const deleteShoppingListItem = (id) => {
        // shoppingReducer global state gets updated with new listitem
         dispatch(removeAction( id )); 
    }

    //Function to Handle DIspatch to Clear All Items on the Shopping List
    const clearShoppingList = () => {
        dispatch(removeAllAction());
    }

    // Create a variable to print shopping list to PDF
    // Documentation: https://printjs.crabbly.com/
    const printPDF = () => {
        printJS({
            printable:'print-form', 
            type:'html',
            header: '<h2 class="user-action-button"> Your Shopping List - Powered by Team Sharp</h2>',
            documentTitle: 'Grocery App - Team Sharp',
            honorColor: true,
            targetStyles: '*'});
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
                    <AddNewIngredient />
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
                        <tbody id="print-form">
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
                    <button className="table-button center" onClick={printPDF}>
                        Print Shopping List
                    </button>
                    
                    <button className="table-button center" onClick={clearShoppingList}>
                        Clear Shopping List
                    </button>                    
                </section>
            </main>
        </>
    );
}

//Export Function
export default ShoppingList;