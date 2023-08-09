import MovieList from "./MovieList";
import Request from "../api/Request";

export default function Movies() {

    return (
        <>
            <MovieList
                heading="Trending this week"
                url={Request.trending}
            />
            <MovieList
                heading="Best in Bolywood"
                url={Request.bolywood}
            />
            <MovieList
                heading="Best in Action"
                url={Request.action}
            />
            <MovieList
                heading="Best in Comedy"
                url={Request.comedy}
            />
            <MovieList
                heading="Best in Horror"
                url={Request.horror}
            />
            <MovieList
                heading="Top rated"
                url={Request.topRated}
            />
            <MovieList
                heading="Must try"
                url={Request.mustTry}
            />
        </>
    )
}