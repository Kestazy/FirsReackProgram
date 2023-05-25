import React, { useState } from 'react'

const Counter = () => {
    // steita deklaruoju visada virsuje
    // pirma reiksme kur bus patalpinta, antra naudojamas metodas ir galiausiai nuo kada pradesiu
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me +
            </button>
            <button onClick={() => setCount(count - 1)}>
                Click me for -
            </button>
        </div>
    )
}

export default Counter