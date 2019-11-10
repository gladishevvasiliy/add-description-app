const initialState = {
    loading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_DESCRIPTION':
            return {
                loading: true,
                error: false,
            };
        case 'UPDATE_DESCRIPTION_SUCCESS':
            return {
                error: false,
                loading: false,
            };
        case 'UPDATE_DESCRIPTION_FAILED':
            return {
                // ...state,
                loading: false,
                error: true,
            };
        default:
            return state
    }
};
