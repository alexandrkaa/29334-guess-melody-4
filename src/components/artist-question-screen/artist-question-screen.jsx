import React from 'react';
import PropTypes from "prop-types";

const ArtistQuestionScreen = (props) => {
  const {question} = props;
  const {
    answers,
    // song,
  } = question;
  return (
    <section className="game game--artist">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>
        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio></audio>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {/* <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-1" id="answer-1" />
            <label className="artist__name" htmlFor="answer-1">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Пелагея
            </label>
          </div>

          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-2" id="answer-2" />
            <label className="artist__name" htmlFor="answer-2">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Краснознаменная дивизия имени моей бабушки
            </label>
          </div>

          <div className="artist">
            <input className="artist__input visually-hidden" type="radio" name="answer" value="artist-3" id="answer-3" />
            <label className="artist__name" htmlFor="answer-3">
              <img className="artist__picture" src="http://placehold.it/134x134" alt="Пелагея" />
              Lorde
            </label>
          </div> */}
          {answers.map((answer, i) => (
            <div key={answer.artist} className="artist">
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`answer-${i}`} id={`answer-${i}`}
                // onChange={(evt) => {
                //   evt.preventDefault();
                //   onAnswer(question, answer);
                // }}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string,
      src: PropTypes.string
    }),
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          genre: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
  }).isRequired
};

export default ArtistQuestionScreen;