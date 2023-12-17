import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
