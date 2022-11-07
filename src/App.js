import { faker } from '@faker-js/faker';
import React from 'react';
import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Snehal"
        timeAgo="Today at 4: 45PM"
        commentText="Nice blog post!"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2: 00PM"
        commentText="superpb"
        imgSrc={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 9: 00AM"
        commentText="Yo man!!"
        imgSrc={faker.image.avatar()}
      />
    </div>
  );
}

export default App;
