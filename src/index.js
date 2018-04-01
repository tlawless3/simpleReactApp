import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Everything is working';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
