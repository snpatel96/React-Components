import './App.css';
import React from 'react';
import { faker } from '@faker-js/faker';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Snehal"
          timeAgo="Today at 4: 45PM"
          commentText="Nice blog post!"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2: 00PM"
          commentText="superpb"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 9: 00AM"
          commentText="Yo man!!"
          imgSrc={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}

export default App;
