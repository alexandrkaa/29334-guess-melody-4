import React from 'react';
import propTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {errorCount} = props;
  return (<WelcomeScreen errorCount={errorCount} />);
};

App.propTypes = {
  errorCount: propTypes.number.isRequired,
};

export default App;
