import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {errorCount} = props;
  const onWelcomeButtonPressed = () => {
    // console.log(`Welcome Button Pressed`);
  };

  return (<WelcomeScreen errorCount={errorCount} onWelcomeButtonPressed={onWelcomeButtonPressed} />);
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
