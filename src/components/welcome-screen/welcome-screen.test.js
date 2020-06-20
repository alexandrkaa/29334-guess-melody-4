import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const mockData = {
  errorCount: 5,
  onWelcomeButtonPressed: () => {},
};

describe(`<WelcomeScreen /> should render`, () => {

  it(`<WelcomeScreen /> should render 5 erros`, () => {
    const {errorCount, onWelcomeButtonPressed} = mockData;
    const tree = renderer
      .create(
          <WelcomeScreen errorCount={errorCount} onWelcomeButtonPressed={onWelcomeButtonPressed} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
