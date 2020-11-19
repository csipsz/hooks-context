import React, {useState} from 'react'
import NewSongForm from './NewSongForm';

const List = () => {
    const [songs, setSongs] = useState([
        {title: 'like it', id: 1},
        {title: 'getting away with murder', id: 2}

    ]);

    const addSong = (title) => {
        setSongs([...songs, {title, id: Math.random()}])
    }
    return (
        <div className="list">
            <ul>
                {songs.map(song => { 
                    return( <li key={song.id}>{song.title}</li>)
                    })}
            </ul>
            <NewSongForm addSong={addSong}/>
        </div>
    )
}

export default List
