import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchList } from './redux/symbolsList/listActions';
function App(props) {
  console.log(props)
  return (
    <div >
      <button onClick={() => props.fetchList()}>Show List</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}
const mapDispatchToProps = (dispatch) => {
  return { fetchList }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
