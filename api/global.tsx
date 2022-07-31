import { genericFetch } from "./api";

export function fetchRateLimit() {

    let API = "https://api.github.com/rate_limit";

    return genericFetch(API)
}
