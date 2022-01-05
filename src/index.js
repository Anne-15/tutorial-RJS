import React from 'react'
import reactDom from 'react-dom';

// css
import './index.css'

// setup variables

const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kYj5Uyu8L._AC_UL302_SR302,200_.jpg',
    title: 'The Love Hypothesis',
    author: 'Ali Hazelwood'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81kYj5Uyu8L._AC_UL302_SR302,200_.jpg',
    title: 'The Love Hypothesis',
    author: 'Ali Hazelwood'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71EwoNQypZL._AC_UL302_SR302,200_.jpg',
    title: 'It Ends with Us: A Novel',
    author: 'Colleen Hoover'
  }
];

function BookList(){
  return (
    <section className='bookList'>
      {books.map((book) => {
        const {img, title, author } = book;
        return <Book key = {book.id} book = {book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book
  return ( 
  <article className='book'>
    <img src = {img} alt="I love you to the moon and back"/>
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
  );
};


reactDom.render(<BookList/>, document.getElementById('root'));