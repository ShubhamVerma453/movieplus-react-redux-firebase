import './Detail.css'

export default function Detail() {
    const imgBase = "https://image.tmdb.org/t/p/w780";
    const lst = {
        adult: false,
        backdrop_path: "/7w06baRS9VPm5RYz8lawTCLiR4j.jpg",
        genre_ids: [
            {
                id: 28,
                name: "Action"
            },
            {
                id: 80,
                name: "Crime"
            },
            {
                id: 53,
                name: "Thriller"
            }
        ],
        id: 592508,
        original_language: "hi",
        original_title: "Sooryavanshi",
        overview: "A fearless, faithful albeit slightly forgetful Mumbai cop, Veer Sooryavanshi, the chief of the Anti-Terrorism Squad in India pulls out all the stops and stunts to thwart a major conspiracy to attack his city.",
        popularity: 19.72,
        poster_path: "/oCymRm6FG62zrKnXiHHJvDgkYoA.jpg",
        release_date: "2021-11-05",
        runtime: 145,
        title: "Sooryavanshi",
        video: false,
        vote_average: 5.8,
        vote_count: 138
    }
    return (
        <div className="container">
            <div className="backgroung">
                <img src={`${imgBase}${lst.backdrop_path}`} alt='background' />
            </div>
            <h1 className="title">{lst.title}</h1>
            <div className="controls">
                <button className="btns play-btn">
                    <span>PLAY</span>
                </button>
                <button className="btns trailer-btn">
                    <span>TRAILER</span>
                </button>
            </div>
            <div className="sub-title">
                <span>{new Date(lst.release_date).getFullYear()}</span>
                <span> | {lst.runtime}m | </span>
                <span>
                    {lst.genre_ids.map((genre, index) => (
                        <span key={genre.id}>
                            {genre.name}
                            {index !== lst.genre_ids.length - 1 && ", "}
                        </span>
                    ))}
                </span>
                {/* 2019 | 30m | Family, Fantasy, Kid, Amination */}
            </div>
            <div className="discription">{lst.overview}</div>
        </div>
    )
}