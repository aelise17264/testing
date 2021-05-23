import React from 'react';
import CommentBox from 'Components/CommentBox';
import {mount} from 'enzyme'; 

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a submit button', () => {
    //console.log(wrapped.find("textarea").length);
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area that users can type in', () => {
    //find the textarea element
    //submit a change event
    // provide a fake event object
    //force the component to update
    //assert that the textarea's value has changed
    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    });
    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

})
