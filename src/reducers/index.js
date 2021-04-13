const initionState = {
    books : [],
    loading: true,
    error: null,
    cartItems: [
        {
            id: 1,
            name: 'Book 1',
            total: 40,
            count: 3
        },
        {
            id: 2,
            name: 'Book 2',
            total: 30,
            count: 2
        }
    ],
    orderTotal: 220
}
const reducer = (state = initionState, action) => {
    switch(action.type){
        case 'FETCH_BOOKS_SUCCEST' : return {
            ...state,
            books: action.payload,
            loading: false,
            error: null
        };
        case 'FETCH_BOOKS_REQUEST' : return {
            ...state,
            books: [],
            loading: true,
            error: null
        };
        case'FETCH_BOOKS_FAILURE': return {
            ...state,
            books: [],
            loading: false,
            error: action.payload
        };

        default: return state;
    }
}

export default reducer;