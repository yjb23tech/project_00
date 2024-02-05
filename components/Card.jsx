import { db } from "../firebase/firebase.js"
import {ref, push } from "firebase/database"

import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {

    function handleClick(e) {
        e.preventDefault()
        console.log("Wake up Neo...")

        const project_00_DB = ref(db, "project00_comments")

        const inputEl = document.getElementById("input_field")
        push(project_00_DB, inputEl.value)
        inputEl.value = " "
        // push(project_00_DB, "Avon Barksdale")

    }

    return (
        <div className="song-card">
            <img src={`images/${props.song_cover_art}`} className="util-box-border-red song-card-cover-art"/>
            <div className=" util-box-border-blue song-card-contents">
                <h2>{props.song_title}</h2>
                <div className="util-box-border-green song-info-group">
                    <img src={album_icon} />
                    <p>{props.song_album_title}</p>
                </div>
                <div className="util-box-border-green song-info-group">
                    <img src={artist_icon} />
                    <p>{props.song_artist_title}</p>
                </div>
                <div className="util-box-border-green song-info-group">
                    <img src={genre_icon} />
                    <p>{props.song_genre_title}</p>
                </div>
                <div className="song-card-button-set">
                    <input type="text" id="input_field" placeholder="Tell us what you think!"/>
                    <button onClick={handleClick}>GO!</button>
                </div>
            </div>
        </div>
    )
    
}

export default Card; 