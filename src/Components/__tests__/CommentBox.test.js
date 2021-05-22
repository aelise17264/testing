import React from 'react';
import CommentBox from 'Components/CommentBox';
import {shallow} from 'enzyme'; //render out a single instance of a component & none of its children

let wrapped;

beforeEach(() => {
  wrapped = shallow(<CommentBox />);
    //wrapped has additional functionality on top of it

})

it('has a text area and a submit button', () => {
    console.log(wrapped.find("textarea").length);
})