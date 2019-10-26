
export const loadList = () => ({
    type: 'LOAD_LIST'
})
export const loadListSuccess = (list) => ({
    type: 'LOAD_LIST_SUCCESS', payload: list
})
export const loadListFailed = () => ({
    type: 'LOAD_LIST_FAILED'
})

export const fetchList = () => {
    console.log('THERE')
    return { type: 'FETCHED_LIST' }
};