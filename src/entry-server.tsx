import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

export function render(url: string) {
  const html = renderToString(
    React.createElement(
      MemoryRouter,
      { initialEntries: [url], initialIndex: 0 },
      React.createElement(App)
    )
  );
  return html;
}
