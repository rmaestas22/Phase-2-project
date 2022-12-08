import React from "react"
import Song from "./Song"

const SongList = ({ songs }) => {

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
                        songs.map(songs => {
                        return <Song key={songs.id} song={songs} />;
                    })
                }
            </tbody>
        </table>
    );
}

export default SongList;