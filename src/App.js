import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './App.css';
import { fetchList } from './redux/symbolsList/listActions';
function App(props) {
  return (
    <div >
      <button onClick={() => props.actions.fetchList()}>Show List</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchList }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
