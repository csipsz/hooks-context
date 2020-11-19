import React, {useState} from 'react'
import uuid from 'uuid/v1'

const List = () => {
    const [songs, setSongs] = useState([
        {title: 'like it', id: 1},
        {title: 'getting away with murder', id: 2}

    ]);

    const addSong = () => {
        setSongs([...songs, {title: "new song", id: uuid()}])
    }
    return (
        <div className="list">
            <ul>
                {songs.map(song => { 
                    return( <li key={song.id}>{song.title}</li>)
                    })}
            </ul>
            <button onClick={addSong}>Add Song</button>
        </div>
    )
}

export default List
