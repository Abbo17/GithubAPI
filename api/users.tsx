export function fetchUsers({ name, order, perPage, page }) {
    let API = `https://api.github.com/search/users`;

    const queryString =
        "q=" +
        encodeURIComponent(name) +
        "&order=" +
        order +
        "&per_page=" +
        perPage +
        "&page=" +
        page;
    return fetch(API + "?" + queryString)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => console.error(error));
}
