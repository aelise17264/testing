//file name w/ lowercase character exports a function by default

import React, {Component} from 'react';
import {connect} from 'react-redux';


export default ChildComponent => {
    class ComposedComponent extends Component{
       
        //component was just rendered
    componentDidMount(){
        this.navigateAway()
    }

    //our component received a new set of props
    componentDidUpdate(){
        this.navigateAway()
    }

    //helper method for both component life cycles
    navigateAway(){
        if(!this.props.auth){
            this.props.history.push("/");
        }
    }
        render() {
            return <ChildComponent {...this.props}/>;
        //takes any props that were passed to our HOC & passes them straight down to the child
        }
    }
    
    function mapStateToProps(state){
        return{auth: state.auth};
    }

    return connect (mapStateToProps)(ComposedComponent);
};

//basic scaffolding for higher order component

