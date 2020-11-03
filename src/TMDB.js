const API_KEY = "c7b7a1ee2a9b9bb2a05eec27f9cd83a1";
const URL_BASE = "https://api.themoviedb.org/3";

export const SEARCH_MOVIE = (movie) => {
    return {
        url: `${URL_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${movie}&page=1`,
        options: {
            method: 'GET'
        }
    }
}

export const FIND_MOVIE = (id) => {
    return {
        url: `${URL_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`
    }
}