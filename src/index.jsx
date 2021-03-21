import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules/Core/components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Implements HMR
if (import.meta.hot) {
  import.meta.hot.accept();
}
