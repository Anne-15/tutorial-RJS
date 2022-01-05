import React from 'react'
import reactDom from 'react-dom';

// css
import './index.css'

// setup variables
import {books} from './books'
import Book from './Book';

function BookList(){
  return (
    <section className='bookList'>
      {books.map((book) => {
        return <Book key = {book.id} book = {book}></Book>;
      })}
    </section>
  );
}

reactDom.render(<BookList/>, document.getElementById('root'));