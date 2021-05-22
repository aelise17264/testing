import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('This is the comment box')
  ReactDOM.unmountComponentAtNode(div)
});