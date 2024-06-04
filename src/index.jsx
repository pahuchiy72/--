import React from 'react';
import ReactDom from 'react-dom/client';

const element = (
  <>
    <h1>Знову Вітаю </h1>
    <p> Спроба третя</p>
  </>
);

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(element);
