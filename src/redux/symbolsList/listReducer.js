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
                error: false,
                list: [],
            };
        case 'LOAD_LIST_SUCCESS':
            return {
                error: false,
                loading: false,
                list: action.payload,
            };
        case 'LOAD_LIST_FAILED':
            return {
                // ...state,
                list: [],
                loading: false,
                error: true,
            };

        default:
            return state
    }
};
