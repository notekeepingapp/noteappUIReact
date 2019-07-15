import React from 'react';
import ReactDOM from 'react-dom';
import NoteApp from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NoteApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
