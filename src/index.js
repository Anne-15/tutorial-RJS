import React from 'react'
import reactDom from 'react-dom';

// css
import './index.css'

function BookList(){
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => 
{
  return ( 
  <article className='book'>
    <Image/>
    <Title/>
    <Author/>
  </article>
  );
};
const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL604_SR604,400_.jpg" 
  alt="I love you to the moon and back" />
);
const Title = () => <h1>I Love you to the Moon and back</h1>;
const Author = () => <h4>Amelia Hepworth</h4>;

reactDom.render(<BookList/>, document.getElementById('root'));