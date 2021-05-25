import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'Components/App';

beforeEach(() => {
    moxios.install(); //intercepts any request that axios will make & stopps them
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200, //so axios thinks the request was successful
        response: [{ name: 'Fetched #1'}, {name: 'Fetched #2'}] //this is the data that we're telling axios it is getting back on its get request
    });
});

afterEach(() => {
    moxios.uninstall(); //stops us from reusing our stub request elsewhere in our testing suite
});

it('can fetch a list of comments & display them', (done) => {
    //attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the 'fetchComments' button & click it
    wrapped.find('.fetchComments').simulate('click');
    //we need a tiny delay between moxios sending request & getting an answer before the test simulates the button click
    // setTimeout(() => {//gets triggered sometime in the future
    moxios.wait(() => { //instead of setTimeOut since we're already using moxios
        wrapped.update();
        //expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2)

        done(); //jest will know that everything is finished when we invoke our cb 'done'
        wrapped.unmount();
    }, 100);//we need jest to hold its horses before considering the entire test to be done for 100 mil seconds
})