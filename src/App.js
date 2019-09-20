import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Reduxion',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  render() {
    const helloWorld = 'Welcome to the Road to Learn React';
    const notAgain = 'Oh No!!! Not Again!!!';
    const array = [1, 4, 9, 16];
    const newArray = array.map(function (x) { return x * 2});
    console.log(newArray);
    return (
        <div className="App">
          {list.map(function(item) {
            return <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span> {item.author}</span>
              <span> {item.num_comments}</span>
              <span> {item.points}</span>
            </div>;
          })}
        </div>
    );
  }
}

export default App;
