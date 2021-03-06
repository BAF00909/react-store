import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux';

const ShoppingCatrTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item,idx) => {
        const {name, id, count, total} = item;
            return (
                <tr key={id}>
                <td>{idx +1 }</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button className="btn btn-outline-danger"
                    onClick={()=>onDelete(id)}>
                        <i className="fa fa-trash-o"/>
                    </button>
                    <button className="btn btn-outline-success"
                    onClick={()=>onIncrease(id)}>
                        <i className="fa fa-plus-circle"/>
                    </button>
                    <button className="btn btn-outline-warning"
                    onClick={()=>onDecrease(id)}>
                        <i className="fa fa-minus-circle"/>
                    </button>
                </td>
            </tr>
            );
    }
    return (
    <div className="shopping-catr-table">
        <h2>Your Order</h2>
        <table className="shopping-cart-table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {items.map(renderRow)}
            </tbody>
        </table>
        <div className="total">
            Total: ${total}
        </div>
    </div>
    );
}

const mapStateToProps = ({cartItems, orderTotal})=>{
    return {
        items: cartItems,
        total: orderTotal
    }
};

const mapDispatchToProps = ()=>{
    return {
        onIncrease: (id)=>{console.log(`increase ${id}`)},
        onDecrease: (id)=>{console.log(`decrease ${id}`)},
        onDelete: (id)=>{console.log(`delete ${id}`)}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCatrTable);