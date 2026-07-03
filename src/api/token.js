export function setToken(token) {
    localStorage.setItem("token", token);
}

export function getToken() {
    const token = localStorage.getItem("token");
    return token && token !== "undefined" && token !== "null" ? token : null;
}

export function removeToken() {
    localStorage.removeItem("token");
}
