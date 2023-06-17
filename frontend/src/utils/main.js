export function getUrlPathname() {
    return window.location.pathname.replace(/^\/([^\/]*).*$/, '$1');
}

export function truncate(str) {
    if (!str) return
    return str.length > 10 ? `${str.substr(0, 10)}..` : str
}

export function formatAgoTime(dateParam) {
    const currentDate = new Date();

    const seconds = 1000, minutes = 60;
    const currentDateMiliSeconds = Date.parse(currentDate);
    const dateParamMiliSeconds = Date.parse(dateParam);

    const dateAgoDifference = currentDateMiliSeconds - dateParamMiliSeconds;

    let minutesAgo = Math.floor(dateAgoDifference / seconds / minutes);
    let hoursAgo = minutesAgo / 60;


    if (hoursAgo >= 24) {
        hoursAgo = Math.floor(hoursAgo / 24);
        return `${hoursAgo} Days Ago`
    }

    if (minutesAgo >= 60) {
        minutesAgo = Math.floor(minutesAgo / 60);
        return `${minutesAgo} Hour Ago`
    }


    return `${minutesAgo} Mins Ago`


}

