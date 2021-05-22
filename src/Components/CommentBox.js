import React, {Component} from 'react';

class CommentBox extends Component{
    state = { comment: ""};

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()



        this.setState({comment: ""})
    }

    render(){
        return(
            <div className="commentBox">
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea placeholder="Write your comment here" value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button type="submit">Submit Comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CommentBox