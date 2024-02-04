import album_icon from "./public/images/album_icon.png"
import artist_icon from "./public/images/artist_icon.png"
import genre_icon from "./public/images/genre_icon.png"

const Card = (props) => {

    return (
        <div className="song-card">
            <img src={`images/${props.song_cover_art}`} className="song-card-cover-art"/>
            <div className="song-card-contents">
                <h2>{props.song_title}</h2>
                <div className="song-info-group">
                    <img src={album_icon} />
                    <p>{props.song_album_title}</p>
                </div>
                <div className="song-info-group">
                    <img src={artist_icon} />
                    <p>{props.song_artist_title}</p>
                </div>
                <div className="song-info-group">
                    <img src={genre_icon} />
                    <p>{props.song_genre_title}</p>
                </div>
            </div>
        </div>
    )
    
}

export default Card; 