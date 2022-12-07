import React from "react"
import { v4 as uuid } from "uuid"

function NewSongForm({ addNewSong }) {

    function handleSubmit(event) {
        event.preventDefault();
        const formElement = event.target;

        const songData = {
            id: uuid(),
            name: formElement["song name"].value,
            released: formElement["year released"].value,
            length: formElement["Length"].value,
            album: formElement["album"].value,

        }

        addNewSong(songData);

        formElement.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="song" placeholder="Name of Song" />
            <input type="text" name="year released" placeholder="Year Released" />
            <input type="text" name="length" placeholder="Length of Song" />
            <input type="text" name="album" placeholder="Album" />
            <input type="submit" value="Add Song" />
        </form>
    );
}

export default NewSongForm;