import React,{useState} from "react"
import { v4 as uuidv4 } from "uuid"



function NewSongForm({ addNewSong, onSubmit }) {
 const [formData,setFormData]=useState({
    song_name:"",
    released:"",
    length:"",
    album:""
})


    const [formValues, setFormValues] = useState({})

    const handleFormValues = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value, id: uuidv4() });

    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const newSong = {
            song_name: formValues.song_name,
            released: formValues.released,
            length: formValues.length,
            album: formValues.album,
        }
        fetch("http://localhost:4000/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSong)

        })
            .then(r => r.json())
            .then(newSongFromServer =>
                addNewSong(newSongFromServer)
            )
    }


        return (
        <div className="newSongForm">
            <h2>Add New Song</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="song_name" placeholder="Song Name" value={formValues.song_name} onChange={handleFormValues}/>
                <input type="text" name="released" placeholder="Year Released" value={formValues.released} onChange={handleFormValues} />
                <input type="text" name="length" step="Length" placeholder="Length" value={formValues.length} onChange={handleFormValues} />
                <input type="text" name="album" step="album" placeholder="Album Name" value={formValues.album} onChange={handleFormValues} />
                <button type="submit" >Add song</button>
            </form>
        </div>
    );


}



export default NewSongForm;