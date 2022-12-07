import React from "react"
import Song from "./Song"

const SongList = ({ songs }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <th>song name</th>
                    <th>Released</th>
                    <th>Length</th>
                    <th>album</th>

                </tr>
                {
                        songs.map(songs => {
                        return <Song key={songs.song} song={songs} />;
                    })
                }
            </tbody>
        </table>
    );
}

export default SongList;