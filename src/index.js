import React, { Suspense } from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<span>Page loading...</span>}>
  <App />
</Suspense>
);

// Design And Development By 
// Name: Ebrahim Yesuf,PMO Unity Park IT Expert, Phone #: +251964773386

reportWebVitals();
