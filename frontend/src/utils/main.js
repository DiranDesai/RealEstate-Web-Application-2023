export function getUrlPathname() {
    return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
}

export function truncate(str) {
    if (!str) return
    return str.length > 10 ? `${str.substr(0, 10)}..` : str
}

