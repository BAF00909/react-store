import React from 'react';
import BookList from '../book-list';

const books =  [
    {
        id: 1,
        title: 'Reodaction-Ready Microservices',
        author: 'Susan J. Fowler'
    },
    {
        id: 2,
        title: 'Realease it!',
        author: 'Michail T. Nygar'
    }
]

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Home Page</h1>
            <BookList books={books} />
        </div>
    )
}

export default HomePage;