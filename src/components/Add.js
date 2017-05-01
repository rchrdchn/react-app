import React, { Component } from 'react';
import apiUtils from './apiUtils';
import '../App.css';

class Add extends Component {

  static propTypes = {
    onAdd: React.PropTypes.func.isRequired,
}

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      loading: false,
      author: '',
      error: ''
    };
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd({ title: this.state.title, author: this.state.author});

    this.setState({
      title: '',
      author: ''
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: true,
      error: '',
    })

    // Look up the book
    apiUtils.findBook(this.state.title, this.state.author).then((fetchedBook) => {
      this.props.onAdd(fetchedBook);

      this.setState({
        title: '',
        author: '',
        loading: false,
        error: '',
      });
    }).catch((error) => {
      this.setState({
        loading: false,
        error: error.message,
      });
    });
  }

  render() {
    return (
    
      <form className="add" onSubmit={this.onSubmit}>
        <input className="input"
          type="text"
          placeholder="Title"
          disabled={this.state.loading}
          value={this.state.title}
          onChange={this.onChangeTitle}
        />
        <br/>
        <input className="input"
          type="text"
          placeholder="Author"
          disabled={this.state.loading}
          value={this.state.author}
          onChange={this.onChangeAuthor}
        />
        <br/>
        <input className="button"
          type="submit"
          disabled={this.state.loading}
          value="submit"
        />
        <div className="error">
          {this.state.error}
        </div>
      </form>
      
    );
  }
}


export default Add;
