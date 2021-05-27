import React from 'react';
import {Route} from 'react-router-dom';
import CommentBox from 'Components/CommentBox';
import CommentList from 'Components/CommentList';


function App() {
  return (
    <div className="App">
      <Route path="/post" component={CommentBox} />
      <Route path="/" component={CommentList} />
    </div>
  );
}

export default App;
