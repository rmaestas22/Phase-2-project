import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewSongForm from "./NewSongForm"
import AllSongList from "./AllSongList"
import VaxisSongList from "./VaxisSongList"
import ColorSongList from "./ColorSongList"
import SecretSongList from "./SecretSongList"
import {Route, Switch} from "react-router-dom"



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




    return (
        <div className="page">

            <NewSongForm addNewSong={addNewSong} />
            <Search onFilterText={onFilterText} />
            <Switch>
                <Route exact path="/">
                    <AllSongList songs={displaySongs} />
                </Route>
                <Route path="/vaxis">
                    <VaxisSongList songs={displaySongs} />
                </Route>
                <Route path="/color">
                    <ColorSongList songs={displaySongs} />
                </Route>
                <Route path="/secret">
                    <SecretSongList songs={displaySongs} />
               </Route>

            </Switch>

        </div>
    )
}

export default Page;