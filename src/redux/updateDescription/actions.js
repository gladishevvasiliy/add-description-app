

export const fetchDescription = () => ({
    type: 'FETCHED_DESCRIPTION'
})

export const updateDescription = (value) => ({
    type: 'UPDATE_DESCRIPTION',
    payload: value
})
export const updateDescriptionSuccess = () => ({
    type: 'UPDATE_DESCRIPTION_SUCCESS'
})
export const updateDescriptionFailed = () => ({
    type: 'UPDATE_DESCRIPTION_FAILED'
})