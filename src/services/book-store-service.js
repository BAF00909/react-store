export default class BookStoreServices {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Reodaction-Ready Microservices',
                author: 'Susan J. Fowler',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/71IFOiK771L._AC_UL160_.jpg'
            },
            {
                id: 2,
                title: 'Realease it!',
                author: 'Michail T. Nygar',
                price: 43,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51qSYJTTVUL._AC_UL160_.jpg'
            }
        ];
    }
}