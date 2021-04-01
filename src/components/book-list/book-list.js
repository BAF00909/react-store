import React from 'react';
import BookListItem from '../book-list-item';

const BookList = ({books}) => {

    return (
        <ul>
            {
                books.map((book)=>{
                    return <li key={book.id}><BookListItem book={book}/></li>
                })
            }
        </ul>
    )
}

export default BookList;