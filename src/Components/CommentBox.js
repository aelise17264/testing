import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'Components/requireAuth';

class CommentBox extends Component{
    state = { comment: ""};

    

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


export default connect(null, actions) (requireAuth(CommentBox));
//action creators are being passed as props to the commentbox component via the connect tag
//commentbox gets other props too from parent component App
// we need to pass down props from parent to child, make sure we don't break the chain!