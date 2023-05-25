import style from "./Book.module.css"
import React from 'react'

const Book = () => {
  return (
    <div className={style.oneBook}>
        <img className={style.oneBookImg} src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="atversta knyga" />
        <h2>Pavadinimas</h2>
        <p>Knygos aprasymas labai ydomi</p>
        <p>Kaina: 15Eur</p>
    </div>
  )
}

export default Book