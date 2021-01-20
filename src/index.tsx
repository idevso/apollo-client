import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import {ApolloClient,ApolloProvider, InMemoryCache} from "@apollo/client";
import {store} from "./store/reducers";



const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery : {
      fetchPolicy : "no-cache",
      errorPolicy : "ignore"
    },
    query : {
      fetchPolicy : "no-cache",
      errorPolicy : "all"
    }
  },
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
