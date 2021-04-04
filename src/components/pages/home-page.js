import React from 'react';
import BookList from '../book-list';
import ShoppingCatrTable from '../shopping-cart-table';

const HomePage = () => {
    return (
        <div className="home-page">
            <BookList/>
            <ShoppingCatrTable />
        </div>
    )
}

export default HomePage;