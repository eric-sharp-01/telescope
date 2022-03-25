import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as creators from './redux/actionCreators';
import Home from 'containers/Home';

const App = (props: any) => {
  const { userId } = props;
  return <div data-user-id={userId}>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </Router>
  </div>
}

const mapStateToProps = (state: any) => state.main;
const mapDispatchToProps = creators;

export default connect(mapStateToProps, mapDispatchToProps)(App);