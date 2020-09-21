//Import React
import React from 'react';
// Import useSelector so we can display global state 
import { useSelector } from 'react-redux';

//Declare Function
function ShoppingList() {

    // shoppingList is declared as the shoppingReducer global state
    const shoppingList = useSelector( state => state.shoppingReducer );
    // We loop through our shoppingList and make each ingredient a list item to be displayed in an unordered list in the cart section
    const currentShoppingList = shoppingList.map( ingredient => <li>{ingredient.ingredient}</li> );

    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-shopping-cart"></i>
                        Cart
                    </h2>
                    <ul>
                        { currentShoppingList }
                    </ul>
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
                            <tr>
                                <td>
                                    Item 1
                                </td>
                                <td>
                                    <button className="table-button">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Item 2
                                </td>
                                <td>
                                    <button className="table-button">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Item 3
                                </td>
                                <td>
                                    <button className="table-button">Remove</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Item 4
                                </td>
                                <td>
                                    <button className="table-button">Remove</button>
                                </td>
                            </tr>
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