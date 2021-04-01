const initionState = {
    books : []
}
const reducer = (state = initionState, action) => {
    switch(action.type){
        case 'BOOKS_LOADED' : return {books: action.payload};
        break;
        default: return state;
        break;
    }
    return state;
}

export default reducer;