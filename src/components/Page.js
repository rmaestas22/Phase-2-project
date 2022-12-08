import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewSongForm from "./NewSongForm"
import SongList from "./SongList"


function Page() {

    const [songs, setSongs] = useState([]);
    const [filterText, setFilterText] = useState("e");

    useEffect(() => {
        fetch("http://localhost:4000/songs")
            .then(response => response.json())
            .then(songData => {
                setSongs(songData);
            })
    }, []);

    function addNewSong(newSong) {

        setSongs([...songs, newSong])
    }

    function onFilterText(text) {
        setFilterText(text);
     }
    //console.log()
     const displaySongs = songs.filter(songs => {
        //const{song_name, released, length, album} = song
        const nsongname = (songs.song_name.toLowerCase().includes(filterText.toLowerCase())

        //console.log(filterText)
            || songs.released.toLowerCase().includes(filterText.toLowerCase())
            || songs.length.toLowerCase().includes(filterText.toLowerCase())
            || songs.album.toLowerCase().includes(filterText.toLowerCase()))
        return nsongname
     }
     );
     console.log(displaySongs)
    function addNewSong(newSong){
        setSongs(prevSongs =>{
            return [...prevSongs,newSong]
        })
    }

    return (
        <div className="page">
            
            <NewSongForm addNewSong={addNewSong} />
            { <Search onFilterText={onFilterText} /> }
            <div className="content">
                <SongList songs={displaySongs} />

            </div>
        </div>
    )
}

export default Page;