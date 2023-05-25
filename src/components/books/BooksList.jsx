import React from 'react'
import Book from '../book/Book'
import style from './BooksList.module.css'



const BooksList = () => {
  return (
    <div className={style.booksList}>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
    </div>
  )
}

export default BooksList