import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import {GameType} from "../../const.js";
import withAudioPlayer from "../../hocs/with-audio-player/with-audio-player.js";
const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

const Main = (props) => {
  const {
    maxMistakes,
    questions,
    onUserAnswer,
    onWelcomeButtonClick,
    step,
  } = props;
  const _renderWelcomeScreen = () => {
    return (
      <WelcomeScreen
        errorsCount={maxMistakes}
        onWelcomeButtonPressed={onWelcomeButtonClick}
      />
    );
  };

  const _renderArtistQuestionScreen = (question) => {
    return (
      <GameScreen type={question.type}>
        <ArtistQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        />
      </GameScreen>
    );
  };

  const _renderGenreQuestionScreen = (question) => {
    return (
      <GameScreen type={question.type}>
        <GenreQuestionScreenWrapped
          question={question}
          onAnswer={onUserAnswer}
        />
      </GameScreen>
    );
  };

  const _render = () => {
    const question = questions[step];

    if (step === -1) {
      return _renderWelcomeScreen(maxMistakes);
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return _renderArtistQuestionScreen(question);
        case GameType.GENRE:
          return _renderGenreQuestionScreen(question);
      }
    }

    return null;
  };

  return _render();
};

Main.propTypes = {
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
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
