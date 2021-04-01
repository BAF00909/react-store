import React from 'react';
import {BookstoreServiceConsumer} from '../book-service-context';

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrapped {...props} bookstoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiceConsumer>
        );
    } 
}

export default withBookStoreService;