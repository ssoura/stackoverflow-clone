import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloClient';
import { AuthProvider } from './context/auth';
import { StateProvider } from './context/state';


ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AuthProvider>
        <StateProvider>
          <App />
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);
