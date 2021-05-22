import React from 'react';
import {shallow} from 'enzyme'; //render out a single instance of a component & none of its children
import App from '../App';
import CommentBox from '../CommentBox';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('shows a comment box', () => {
  const wrapped = shallow(<App />);
  //wrapped has additional functionality on top of it
  expect(wrapped.find(CommentBox).length).toEqual(1)
  //find will return an array with the number of times CommentBox was found
  
});