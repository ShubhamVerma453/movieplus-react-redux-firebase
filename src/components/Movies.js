import MovieList from "./MovieList";
import Request from "../api/Request";

export default function Movies() {

    return (
        <>
            <MovieList
                heading="Trending this week"
                isSlider={true}
                url={Request.trending}
            />
            <MovieList
                heading="Best in Bolywood"
                isSlider={true}
                url={Request.bolywood}
            />
            <MovieList
                heading="Best in Action"
                isSlider={true}
                url={Request.action}
            />
            <MovieList
                heading="Best in Comedy"
                isSlider={false}
                url={Request.comedy}
            />
            <MovieList
                heading="Best in Horror"
                isSlider={false}
                url={Request.horror}
            />
            <MovieList
                heading="Top rated"
                isSlider={false}
                url={Request.topRated}
            />
            <MovieList
                heading="Must try"
                isSlider={true}
                url={Request.mustTry}
            />
        </>
    )
}