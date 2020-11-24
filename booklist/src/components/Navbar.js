import React, {useContext} from 'react'
import { BookContext } from '../contexts/bookContext'

const Navbar = () => {
    const {books} = useContext(BookContext);
    return (
        <div className="navbar">
            <h1>Reading list</h1>
            <p>Currently you have {books.length} books to finish</p>
            
        </div>
    )
}

export default Navbar
