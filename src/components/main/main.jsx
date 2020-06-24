import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';

import {GameType} from "../../const.js";

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };

    this._toNextStep = this._toNextStep.bind(this);
    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
    this._renderArtistQuestionScreen = this._renderArtistQuestionScreen.bind(this);
    this._renderGenreQuestionScreen = this._renderGenreQuestionScreen.bind(this);
  }

  _toNextStep() {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }));
  }

  _renderWelcomeScreen(errorCount) {
    return (
      <WelcomeScreen
        errorCount={errorCount}
        onWelcomeButtonPressed={this._toNextStep}
      />
    );
  }

  _renderArtistQuestionScreen(question) {
    return (
      <GameScreen type={question.type}>
        <ArtistQuestionScreen
          question={question}
          onAnswer={this._toNextStep}
        />
      </GameScreen>
    );
  }

  _renderGenreQuestionScreen(question) {
    return (
      <GameScreen type={question.type}>
        <GenreQuestionScreen
          question={question}
          onAnswer={this._toNextStep}
        />
      </GameScreen>
    );
  }

  render() {
    const {errorCount, questions} = this.props;
    let {step} = this.state;
    const question = questions[step];

    if (step >= questions.length) {
      step = -1;
    }

    if (step === -1) {
      return this._renderWelcomeScreen(errorCount);
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return this._renderArtistQuestionScreen(question);
        case GameType.GENRE:
          return this._renderGenreQuestionScreen(question);
      }
    }

    return null;
  }
}

Main.propTypes = {
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

export default Main;
