import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import productsReducer, { productFetch } from './features/productsSlice';
import { productsApi } from './features/productApi';

const store = configureStore({
  reducer: {
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  // middleware: (getDefaultMiddleware) => {
  //   getDefaultMiddleware().concat(productsApi.middleware)
  // }
})

store.dispatch(productFetch)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


