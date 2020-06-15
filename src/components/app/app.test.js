
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mockData = {
  errorCount: 5,
};

// Вы можете запустить все тесты или только определённый
// npm run test.jest -- -t '<WelcomeScreen /> should render 5 erros'
describe(`<App /> should render`, () => {

  it(`<App /> should render 5 erros`, () => {
    const {errorCount} = mockData;
    const tree = renderer
      .create(
          <App errorCount={errorCount} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

});
