//Import React and useState
import React from 'react';
import { useState } from 'react';

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

    //Declare useState to Toggle AddNewIngredient display
    const [displayAddNewIngredient, setToggleAddNewIngredient] = useState( false );

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

    const toggleAddNewIngredient = () => {
        //Ternary Statement to Toggle displayAddNewIngredient between True and False
        displayAddNewIngredient ? setToggleAddNewIngredient(false) : setToggleAddNewIngredient(true);
    };

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
                    <div className="center">
                        <button className="user-action-button" title="Add to Shopping List" onClick={toggleAddNewIngredient}>
                            <i className="fas fa-plus"></i>
                            <span className="desktop-screen-only">Add</span>
                        </button>
                        <button className="user-action-button" title="Print Shopping List" onClick={printPDF}>
                            <i className="fas fa-print"></i>
                            <span className="desktop-screen-only">Print</span>
                        </button>
                        <button className="user-action-button" title="Clear Shopping List" onClick={clearShoppingList}>
                            <i className="fas fa-trash"></i>
                            <span className="desktop-screen-only">Clear</span>
                        </button>
                    </div>
                    {displayAddNewIngredient ? <AddNewIngredient /> : null}
                </section>
            </main>
        </>
    );
}

//Export Function
export default ShoppingList;