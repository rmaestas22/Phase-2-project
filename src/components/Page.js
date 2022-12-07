import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewSongForm from "./NewSongForm"
import SongList from "./SongList"


function Page() {

    const [songs, setSongs] = useState([]);
    const [filterText, setFilterText] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/songs")
            .then(response => response.json())
            .then(songData => {
                setSongs(songData);
            })
    }, []);

    function addNewSong(song) {
        fetch("http://localhost:4000/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(song)
        });

        setSongs([...songs, song])
    }

     function onFilterText(text) {
         setFilterText(text);
     }

     const displaySongs = songs.filter(song => {
     const searchLowerCase = filterText.toLowerCase();

         return (
                song.song_name.toLowerCase().includes(searchLowerCase)
             || song.released.toLowerCase().includes(searchLowerCase)
             || song.length.toLowerCase().includes(searchLowerCase)
             || song.album.toLowerCase().includes(searchLowerCase)
         );
     });

    return (
        <div className="page">
            <NewSongForm addNewSong={addNewSong} />
            { <Search filterText={onFilterText} /> }
            <div className="content">
                <SongList songs={displaySongs} />
                
            </div>
        </div>
    )
}

export default Page;