import { createRoot } from "react-dom/client"
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <Card 
                song_cover_art = "track_13_song_art.png"
                song_title = "Benjamins Burn Remix"
                song_album_title = "My Beautiful Dark Twisted Fantasy"
                song_artist_title = "Kanye West"
                song_genre_title = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)
