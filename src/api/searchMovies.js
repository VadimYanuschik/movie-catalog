// Функция поиска по АПИ
export default function searchMovies(search) {
    const apiKey = '8523cbb8';
    return fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${search}`,
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