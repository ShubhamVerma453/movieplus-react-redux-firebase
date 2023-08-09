const requests = {
    trending: "/trending/movie/week?language=en-US",
    bolywood: "/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi",
    action: "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28",
    comedy: "/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=35&with_origin_country=IN",
    horror: "/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=27",
    topRated: "/movie/top_rated?language=en-US&page=1",
    mustTry: "/discover/movie?include_adult=false&include_video=false&page=1&sort_by=popularity.desc&with_genres=14",
}

export default requests;