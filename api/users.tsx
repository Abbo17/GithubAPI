export function fetchUsers(userName) {
    let API = `https://api.github.com/search/users`;

    const queryString = "q=" + encodeURIComponent("pedro");
    return fetch(API + "?" + queryString)
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => console.error(error));
}
