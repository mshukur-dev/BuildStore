export function setProfile(user) {
    localStorage.setItem("user", JSON.stringify(user));
}

export function getProfile() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

export function removeProfile() {
    localStorage.removeItem("user");
}
