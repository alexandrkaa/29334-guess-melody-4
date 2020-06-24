import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";
const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

const App = (props) => {
  const {questions, errorCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main questions={questions} errorCount={errorCount} />
        </Route>
        <Route exact path="/artist">
          <ArtistQuestionScreenWrapped
            question={questions[1]}
            onAnswer={() => {}}
          />
        </Route>
        <Route exact path="/genre">
          <GenreQuestionScreenWrapped
            question={questions[0]}
            onAnswer={() => {}}
          />
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
