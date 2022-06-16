import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import productsReducer from './features/productsSlice';
import filtersReducer from './features/filtersSlice'
import searchDataReducer from './features/searchSlice'
// import { productsApi } from './features/productApi';

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    searchText: searchDataReducer
    // [productsApi.reducerPath]: productsApi.reducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(productsApi.middleware)
  // }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


