import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import mocks from './mocks/questions.js';

const init = () => {
  const settings = {
    errorCount: 12,
  };
  ReactDOM.render(
      <App questions={mocks} errorCount={settings.errorCount} />,
      document.querySelector(`#root`)
  );
};

init();
