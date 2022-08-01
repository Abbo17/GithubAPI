export function genericFetch(url : string, method = "GET", headers = {}, body = undefined) {
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
