import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

const App = (props) => {
  const {errorCount} = props;
  const onWelcomeButtonPressed = () => {
    // console.log(`Welcome Button Pressed`);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen errorCount={errorCount} onWelcomeButtonPressed={onWelcomeButtonPressed} />
        </Route>
        <Route exact path="/dev-artist">
          <ArtistQuestionScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
};

export default App;
