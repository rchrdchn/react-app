require('dotenv').config()

import React, { Component } from 'react';
import Book from './components/book';
import Add from './components/Add';
import apiUtils from './components/apiUtils';
import './App.css';
import './Add.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      favoritesFilterOn: false,
      books: [
        {
          title: 'Rework',
          description: 'Most business books give you the same old advice: Write a business plan, study the competition, seek investors, yadda yadda. If you\'re looking for a book like that, put this one back on the shelf. Rework shows you a better, faster, easier way to succeed in business. Read it and you\'ll know why plans are actually harmful, why you don\'t need outside investors, and why you\'re better off ignoring the competition. The truth is, you need less than you think. You don\'t need to be a workaholic. You don\'t need to staff up. You don\'t need to waste time on paperwork or meetings. You don\'t even need an office. Those are all just excuses. What you really need to do is stop talking and start working. This book shows you the way. You\'ll learn how to be more productive, how to get exposure without breaking the bank, and tons more counterintuitive ideas that will inspire and provoke you. With its straightforward language and easy-is-better approach, Rework is the perfect playbook for anyone who’s ever dreamed of doing it on their own. Hardcore entrepreneurs, small-business owners, people stuck in day jobs they hate, victims of \"downsizing,\" and artists who don\’t want to starve anymore will all find valuable guidance in these pages. From the Hardcover edition.',
          author: 'Jason Fried & David Heinemeier Hansson',
          favorited: false,
        },
        {
          title: 'Rich Dad Poor Dad',
          description: 'Have you ever noticed that there are a lot of accountants who aren\'t rich? And bankers, and attorneys, and stockbrokers and real estate brokers. They know a lot, and for the most part are smart people, but most of them are not rich. Since our schools do not teach people what the rich know, we take advice from these people. But one day, you\'re driving down the highway, stuck in traffic, struggling to get to work, and you look over to your right and you see your accountant stuck in the same traffic jam. You look to your left and you see your banker. That should tell you something.” The computer programmer was also unimpressed by the game: “I can buy software to teach me this.” The banker, however, was moved. “I studied this in school-the accounting part, that is-but I never knew how to apply it to real life. Now I know. I need to get myself out of the \`Rat Race.\'',
          author: 'Robert Kiyosaki',
          favorited: false,
        },
      ],
    };
  }

  
  onAddBook = (book) => {
    this.setState({ books: [book].concat(this.state.books),
    });
  }

  render() {
    return (

      <div className="App">
      <div className="App-header">
        <div>Your Favorite Books</div>
      </div>
      <h2 className="books-title">Search Here...</h2>

      <Add onAdd={this.onAddBook} />

      <ul className="books-body">
      {
        this.state.books.map(book =>
          <Book
          key={book.title}
          title={book.title}
          author={book.author}
          description={book.description}
          favorited={book.favorited}
          />
        )
      }
      </ul>
      
      </div>
    );
  }
}


export default App;
