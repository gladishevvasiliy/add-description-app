const initialState = {
    list: [],
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_LIST':
            return {
                ...state,
                loading: true,

            };
        case 'LOAD_LIST_SUCCESS':
            return {
                ...state,
                loading: false,
                list: action.payload,
            };
        case 'LOAD_LIST_FAILED':
            return {
                ...state,
                loading: false,
                error: true,
            };

        default:
            return state
    }
};
