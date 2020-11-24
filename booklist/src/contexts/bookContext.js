import React, {createContext, useState} from 'react'; 

export const BookContext = createContext(); 

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: "Critics of the Pure Mind", author: "Immanuel Kant",  id: Math.random()},
        {title: "Sein und Zeit", author: "Martn Heidegger", id: Math.random()},
        {title: "The Phenomenology of Spirit", author: "Georg Wilhelm Friedrich Hegel", id: Math.random()},
        {title: "Zarathustra", author: "Friedrich Nietzsche", id: Math.random()}
    ]); 
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: Math.random()}])
    }
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return(
        <BookContext.Provider value={{books, addBook, removeBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider