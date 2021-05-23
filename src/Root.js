import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'Reducers';

export default (props) =>{
    return(
        <Provider store={createStore(reducers, {})}>
            {props.children} 
        </Provider>
    )
}

            //allows us to take the component that we created & allows us to wrap other components inside
