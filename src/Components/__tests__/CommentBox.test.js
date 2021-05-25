import React from 'react';
import CommentBox from 'Components/CommentBox';
import {mount} from 'enzyme'; 
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
  <Root>
    <CommentBox />
  </Root>);
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a submit button', () => {
    //console.log(wrapped.find("textarea").length);
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
})

describe('the text area', () => {
    beforeEach(() => {
        //describe how the text area works
        wrapped.find('textarea').simulate('change', {
            target: {value: 'new comment'}
        });
        wrapped.update();
    })

    it('has a text area that users can type in', () => {
        //find the textarea element
        //submit a change event
        //provide a fake event object
        //force the component to update
        //assert that the textarea's value has changed
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')

    })

    it('clears the text area when the user submits a new comment', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    
    })
})