//Import React
import React from 'react';

//Declare Function
function ShoppingList() {
    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-shopping-cart"></i>
                        Cart
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