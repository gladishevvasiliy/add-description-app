import { connect } from 'react-redux'
import List from '../components/List'
import { getList, getLoadigStatus } from '../redux/symbolsList/listSelectors'
import { getLoadingStatus as getLoadingStatusUpdateDescription } from '../redux/updateDescription/selectors'
import { updateDescription } from '../redux/updateDescription/actions'


const mapStateToProps = (state) => ({
    values: getList(state),
    loadingList: getLoadigStatus(state),
    loadingUpdate: getLoadingStatusUpdateDescription(state),
})
const mapDispatchToProps = dispatch => ({
    updateDescription: (data) => dispatch(updateDescription(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)