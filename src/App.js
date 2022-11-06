import './App.css';
import { faker } from '@faker-js/faker';

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            John Doe
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            John Doe
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={faker.image.avatar()} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            John Doe
          </a>
          <div className="metadata">
            <span className="date">Today at 6:00PM</span>
          </div>
          <div className="text">Nice Blog Post!</div>
        </div>
      </div>
    </div>
  );
}

export default App;
