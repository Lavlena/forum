import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { QuestionProvider } from './context/QuestionContext';
import { AnswerProvider } from './context/AnswerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <UserProvider>
        <QuestionProvider>
          <AnswerProvider>
               <App />
          </AnswerProvider>
        </QuestionProvider>
      </UserProvider>
  </BrowserRouter>
);


