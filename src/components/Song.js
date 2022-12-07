import React from "react"

function Song ({ song }) {
    return (
        <tr>
            <td>{song.song_name}</td>
            <td>{song.released}</td>
            <td>{song.length}</td>
            <td>{song.album}</td>

        </tr>
    );
}

export default Song;