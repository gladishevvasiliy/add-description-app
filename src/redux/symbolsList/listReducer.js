const initialState = {
    list: [],
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LIST':
            return {
                loading: true,
                ...state
            };
        case 'LOAD_LIST_SUCCESS':
            return {
                loading: false,
                list: action.payload,
                ...state
            };
        case 'LOAD_LIST_FAILED':
            return {
                loading: false,
                error: true,
                ...state
            };

        default:
            return state
    }
};
