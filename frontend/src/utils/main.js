export function getUrlPathname() {
    return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
}

