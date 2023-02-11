import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import App from './AppTest';
// import App from './ImdbApp';
// import App from './ModalTest';
import App from './insta/InstaTest';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
/*

    "@heroicons/react": "^1.0.5",

    */
