function genericFetch(url, method = "GET", headers = {}, body = undefined) {
    let fetchParams = {
        method: method,
        headers: headers,
        body: body,
    };
    return fetch(url, fetchParams).then(async (res) => {
        let data = await res.json();
        if (res.ok) {
            return data;
        } else {

            throw new Error(data.message);
        }
    });
}

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
