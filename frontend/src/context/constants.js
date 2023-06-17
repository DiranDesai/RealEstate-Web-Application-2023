
const urlPathname = window.location.href;

let originURL

if (urlPathname.toString().includes("localhost")) {
    originURL = "http://localhost:5000/api/v1";
} else {
    originURL = "https://real-estate-backend-2nky.onrender.com/api/v1";
}

export const URL = originURL




