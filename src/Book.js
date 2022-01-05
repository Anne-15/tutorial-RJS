import React from 'react'
// event handlers: onClick, onMouseOver. You can add then inline or explicitly
const Book = (props) => {
  const { img, title, author } = props.book
  return ( 
    <article className='book' onMouseOver={() => {
        console.log(title);
    }}>
        <img src = {img} alt=''/>
        <h1>{title}</h1>
        <h4>{author}</h4>
    </article>
  );
};

export default Book
