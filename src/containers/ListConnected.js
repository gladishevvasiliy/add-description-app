import { connect } from 'react-redux'
import List from '../components/List'
import { getList, getLoadigStatus } from '../redux/symbolsList/listSelectors'


const mapStateToProps = (state) => ({
    values: getList(state),
    loading: getLoadigStatus(state)
})
const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(List)