import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';


class CommentBox extends Component{
    state = { comment: ""};

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

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.saveComment(this.state.comment)

        this.setState({comment: ""})
    }

    render(){
        return(
            <div className="commentBox">
                <div className="top">
                    <form onSubmit={this.handleSubmit}>
                        <h4>Add a Comment</h4>
                        <textarea placeholder="Write your comment here" value={this.state.comment} onChange={this.handleChange}/>
                        <div>
                            <button type="submit">Submit Comment</button>
                        </div>
                    </form>
                    <button className="fetchComments" onClick={this.props.fetchComments}>Fetch Comments</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{auth: state.auth};
}

export default connect(mapStateToProps, actions) (CommentBox);