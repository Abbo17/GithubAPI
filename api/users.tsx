import { genericFetch } from "./api";

export function fetchUsers({
    name = "",
    order = "asc",
    perPage = "20",
    page = "1",
}) {
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

    return genericFetch(API + "?" + queryString);
}

export function fetchPopularUsers() {
    let API = `https://api.github.com/search/users`;

    const queryString = "q=repos:%3E42+followers:%3E1000&per_page=5";
    return genericFetch(API + "?" + queryString);
}
