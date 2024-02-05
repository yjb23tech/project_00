import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {

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
                    <input type="text" placeholder="Tell us what you think!"/>
                    <button>GO!</button>
                </div>
            </div>
        </div>
    )
    
}

export default Card; 