export function fetchRateLimit() {
    let API = "https://api.github.com/rate_limit";
    return fetch(API)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => console.error(error));
}
