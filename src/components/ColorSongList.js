import React from "react"
import Song from "./Song"

const ColorSongList = ({ songs }) => {

    const filteredSongs = songs.filter(song => {
        return song.album === "The Color Before the Sun"
    })

    return (
        <table className="songTable">
            <tbody>
                <tr>
                    <th> <a>Song Name</a> </th>
                    <th> <a>Year Released</a> </th>
                    <th> <a>Song Length</a> </th>
                    <th> <a>Album Name</a> </th>
                </tr>

                {
                    filteredSongs.map(song => {
                        return <Song key={song.id} song={song} />;
                    })
                }
            </tbody>
        </table>
    );
}

export default ColorSongList;