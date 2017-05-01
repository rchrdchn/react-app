import React, { Component } from 'react';
import './book.css';


class Book extends Component {

static defaultProps = {
	description: '',
}

static propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  favorited: React.PropTypes.bool.isRequired,
  description: React.PropTypes.string
}

constructor(props) {
  super(props);

  this.state = {
    favorited: false,
  };
}

onClickFavorite = () => {
    this.props.onToggleFavorite(this.props.title);
}


render() {
	
	const favoriteClass = this.props.favorited ? "enabled" : '';

    return (
    
      <li className="book">
        <div className="title">
          <span
            className={`favorite ${favoriteClass}`}
            onClick={this.onClickFavorite}
          />
          {this.props.title}
        </div>
        <div className="description">
          {this.props.description}
        </div>
        <div className="author">
          {`by ${this.props.author}`}
        </div>
      </li>
    
    );
  }
}


export default Book;