import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `path`,
          genre: `rock`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `jazz`,
        },
        {
          src: `path`,
          genre: `blues`,
        },
      ],
    },
    {
      type: `artist`,
      song: {
        artist: ``,
        src: ``
      },
      answers: [
        {
          artist: `one`,
          picture: `pic-one`,
        },
        {
          artist: `two`,
          picture: `pic-two`,
        },
        {
          artist: `three`,
          picture: `pic-three`,
        },
      ],
    }
  ],
  errorCount: 4
};

it(`Should all screens be rendered`, () => {
  const {questions, errorCount} = mock;
  const main = mount(
      <Main questions={questions} errorCount={errorCount} />
  );
  const welcomeScreen = main.find(`section.welcome`);
  expect(welcomeScreen).toHaveLength(1);
  const welcomeButton = main.find(`button.welcome__button`);
  expect(welcomeButton).toHaveLength(1);
  welcomeButton.simulate(`click`);
  main.update();

  const genreScreen = main.find(`section.game--genre`);
  expect(genreScreen).toHaveLength(1);
  const genreScreenSubmit = main.find(`button.game__submit`);
  expect(genreScreenSubmit).toHaveLength(1);
  const form = main.find(`form.game__tracks`);
  form.simulate(`submit`);
  main.update();

  const artistScreen = main.find(`section.game--artist`);
  expect(artistScreen).toHaveLength(1);
});
