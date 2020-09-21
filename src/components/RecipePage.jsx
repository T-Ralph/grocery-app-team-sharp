//Import React
import React from 'react';

//Declare Function
function RecipePage() {
    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-utensils"></i>
                        Recipes
                    </h2>
                    <h3>
                        Instructions
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel facilisis volutpat est velit egestas dui id. Tristique senectus et netus et malesuada fames ac. Tortor condimentum lacinia quis vel. Non curabitur gravida arcu ac tortor dignissim. Donec et odio pellentesque diam volutpat. Vitae congue eu consequat ac. Purus faucibus ornare suspendisse sed nisi lacus. Platea dictumst quisque sagittis purus sit amet volutpat consequat mauris. Tellus at urna condimentum mattis pellentesque id nibh. Orci nulla pellentesque dignissim enim. Vitae justo eget magna fermentum. Proin sagittis nisl rhoncus mattis.
                    </p>
                    <h3>
                        Ingredients
                    </h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Ingredients
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Ingredient 1
                                </td>
                                <td>
                                    <button className="table-button">Add to Shopping List</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Ingredient 2
                                </td>
                                <td>
                                    <button className="table-button">Add to Shopping List</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Ingredient 3
                                </td>
                                <td>
                                    <button className="table-button">Add to Shopping List</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Ingredient 4
                                </td>
                                <td>
                                    <button className="table-button">Add to Shopping List</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Ingredients
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
export default RecipePage;