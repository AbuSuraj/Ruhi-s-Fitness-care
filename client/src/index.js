import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      
    <App />
    </AuthProvider>
  </React.StrictMode>
);

 
reportWebVitals();
