import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container } from 'react-bootstrap';
import ListConnected from './containers/ListConnected';

import { fetchList } from './redux/symbolsList/listActions';
function App(props) {
  const [isLoaded, setLoadingState] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      props.actions.fetchList()
      setLoadingState(true)
    }
  })

  return (
    <Container >
      <ListConnected />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return state;
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ fetchList }, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
