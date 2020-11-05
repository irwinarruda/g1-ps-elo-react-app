const API_KEY = "c7b7a1ee2a9b9bb2a05eec27f9cd83a1";
const URL_BASE = "https://api.themoviedb.org/3";

export const SEARCH_MOVIE = (movie) => {
    return {
        urlD: `${URL_BASE}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${movie}&page=1`,
        optionsD: {
            method: 'GET'
        }
    }
}

export const FIND_MOVIE = (id) => {
    return {
        urlD: `${URL_BASE}/movie/${id}?api_key=${API_KEY}&language=pt-BR`,
        optionsD: {
            method: 'GET'
        }
    }
}