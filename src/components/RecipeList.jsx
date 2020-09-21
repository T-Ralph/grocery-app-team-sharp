//Import React, Link from React-Router
import React from 'react';
import { Link } from 'react-router-dom';

//Declare Function
function RecipeList() {
    return(
        <>
            <main>
                <section className="main-section">
                    <h2>
                        <i className="fas fa-utensils"></i>
                        Recipes
                    </h2>
                    <form className="form" id="form-filters">
                        <label htmlFor="filters"><i className="fas fa-filter"></i> Filters</label>
                        <select id="filters">
                            <option value="">Select a Filter</option>
                            <option>Filter 1</option>
                            <option>Filter 2</option>
                            <option>Filter 3</option>
                        </select>
                    </form>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    Recipe
                                </th>
                                <th>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Recipe 1
                                </td>
                                <td>
                                    <button className="table-button">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Recipe 2
                                </td>
                                <td>
                                    <button className="table-button">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Recipe 3
                                </td>
                                <td>
                                    <button className="table-button">View</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Recipe 4
                                </td>
                                <td>
                                    <button className="table-button">View</button>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    Recipe
                                </th>
                                <th>
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                    <p>
                        <Link to="/recipe-page">
                            Sample/Preview the Individual Recipe Page
                        </Link>
                    </p>
                </section>
            </main>
        </>
    );
}

//Export Function
export default RecipeList;