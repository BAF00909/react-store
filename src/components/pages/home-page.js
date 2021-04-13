import React from 'react';
import BookListContainer from '../book-list';
import ShoppingCatrTable from '../shopping-cart-table';

const HomePage = () => {
    return (
        <div className="home-page">
            <BookListContainer/>
            <ShoppingCatrTable />
        </div>
    )
}

export default HomePage;