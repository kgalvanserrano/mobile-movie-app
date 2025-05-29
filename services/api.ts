export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchMovies = async ({ query }: { query: string }) => {
    const endpoint = query
        ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
        throw new Error(`Error fetching movies: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
}


export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try {
        const ressponse = await fetch(`${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_+key=${TMDB_CONFIG.API_KEY}`, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        if (!ressponse.ok) throw new Error(`Failed to fetch movie details`);

        const data = await ressponse.json();

        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

// const url = /discover/movie
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGFhYjMwOWFkNWZjY2VhY2UwZGFkYmI0NWM1ZDRkYSIsIm5iZiI6MTc0ODMwNzQ5My4yMjU5OTk4LCJzdWIiOiI2ODM1MGUyNTA4ODlkM2I0Yjc0MTQ4ZmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z3BdpT-sNI8gAogQE0xrgEw57YRYJzsNiRgR33sfmE8'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));