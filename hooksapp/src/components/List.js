import React, {useState, useEffect} from 'react'
import NewSongForm from './NewSongForm';

const List = () => {
    const [songs, setSongs] = useState([
        {title: 'like it', id: 1},
        {title: 'getting away with murder', id: 2}

    ]);
    const [age, setAge] = useState(20);
    const addSong = (title) => {
        setSongs([...songs, {title, id: Math.random()}])
    }
    useEffect(() => {
        console.log('useeffect hook ran', songs)
    }, [songs])
    useEffect(() => {
        console.log('useeffect hook ran', age)
    }, [age])
    return (
        <div className="list">
            <ul>
                {songs.map(song => { 
                    return( <li key={song.id}>{song.title}</li>)
                    })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
    )
}

export default List
