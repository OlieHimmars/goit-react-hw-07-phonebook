import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { GlobalStyle } from './style/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <GlobalStyle />
    </Provider>
  </React.StrictMode>
);