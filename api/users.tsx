import { genericFetch } from "./api";

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
    return genericFetch(API + "?" + queryString)
}
