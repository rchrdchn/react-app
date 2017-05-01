import React, { Component } from 'react';
import '../App.css';


class Book extends Component {
  render() {
    return (
      <li className="book">
        <div>
        	{this.props.title}
        </div>
        <div>
        	by {this.props.author}
        </div>
      </li>
    );
  }
}


export default Book;