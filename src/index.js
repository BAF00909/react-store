import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app';
import ErrorBuondary from './components/error-boundry';
import BookStoreServices from './services/book-store-service';
import {BookstoreServiceProvider} from './components/book-service-context';
import store from './store';

const bookstoreSrvice = new BookStoreServices();


ReactDOM.render(
    <Provider store={store}>
       <ErrorBuondary>
           <BookstoreServiceProvider value={bookstoreSrvice}>
                <Router>
                    <App/>
                </Router>
           </BookstoreServiceProvider>
       </ErrorBuondary>
    </Provider>

, document.getElementById('root'));