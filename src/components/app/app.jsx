import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';

const App = (props) => {
  const {errorCount, questions} = props;
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
          <ArtistQuestionScreen question={questions[0]} />
        </Route>
        <Route exact path="/dev-genre">
          <GenreQuestionScreen question={questions[1]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        genre: PropTypes.string,
        song: PropTypes.shape({
          artist: PropTypes.string,
          src: PropTypes.string
        }),
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string,
              genre: PropTypes.string,
            }).isRequired
        ).isRequired,
      }).isRequired
  ),
};

export default App;
