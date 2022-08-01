import { genericFetch } from "./api";

export function fetchRepositories({
    name = "",
    order = "asc",
    perPage = "20",
    page = "1",
}) {
    let API = `https://api.github.com/search/repositories`;

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

export function fetchPopularRepositories() {
    let API = `https://api.github.com/search/repositories`;

    const queryString = "q=stars:%3E1000&per_page=5&order=desc&sort=stars";
    return genericFetch(API + "?" + queryString);
}
