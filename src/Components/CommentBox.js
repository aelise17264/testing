import React from 'react';

export default function CommentBox() {
    return (
    <div className="commentBox">
    <p>This is the comment box</p>
    <textarea placeholder="write a comment here"></textarea>
    <button type="submit">Submit</button>
    </div>
    )
}