import './Home.css'
import Header from './Header.js'
import Slider from './Slider'
import MovieList from './MovieList'
import Movies from './Movies'

export default function Home() {
    return (
        <div id="home">
            <Header />
            <Slider />
            <Movies />
        </div>
    )
}

