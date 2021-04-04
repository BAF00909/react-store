import React from 'react';
import './shopping-cart-table.css';

const ShoppingCatrTable = () => {
    return (
    <div className="shopping-catr-table">
        <h2>Your Order</h2>
        <table className="shopping-cart-table">
            <thead>
                <th>#</th>
                <th>Item</th>
                <th>Count</th>
                <th>Price</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Site Reliability Engeneering</td>
                    <td>2</td>
                    <td>$40</td>
                    <td>
                        <button className="btn btn-outline-danger">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className="total">
            Total: $201
        </div>
    </div>
    );
}

export default ShoppingCatrTable;