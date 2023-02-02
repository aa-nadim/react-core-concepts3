import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className='App'>
      <Counter />
      <LoadComments />
    </div>
  );
}

function LoadComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  console.log(comments);
  return (
    <div>
      <h2>Comments: {comments.length}</h2>
      {comments.map((comment) => (
        <Comment email={comment.email} body={comment.body} />
      ))}
    </div>
  );
}

function Comment(props) {
  return (
    <div>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => handleIncrease()}>Increase</button>
      <button onClick={() => handleDecrease()}>Decrease</button>
    </div>
  );
}
export default App;
