// Функция поиска по АПИ
export default function searchMovies(search, page = 1) {
    const apiKey = '8523cbb8';
    return fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}&page=${page}`,
        {
            method: 'GET'
        }
    )
        .then(r => r.json())
        .catch(error => {
            console.error(error);
            return [];
        });
}