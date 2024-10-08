export function getUrlPathname() {
  return window.location.pathname.replace(/^\/([^\/]*).*$/, "$1");
}

export function truncate(str) {
  if (!str) return;
  return str.length > 10 ? `${str.substr(0, 10)}..` : str;
}

export function titleStrip(str, len=30) {
  if (!str) return;
  return str.length > len ? `${str.substr(0, len)}..` : str;
}

export function formatAgoTime(dateParam) {
  const currentDate = new Date();

  const seconds = 1000,
    minutes = 60;
  const currentDateMiliSeconds = Date.parse(currentDate);
  const dateParamMiliSeconds = Date.parse(dateParam);

  const dateAgoDifference = currentDateMiliSeconds - dateParamMiliSeconds;

  let minutesAgo = Math.floor(dateAgoDifference / seconds / minutes);
  let hoursAgo = minutesAgo / 60;
  let secondsAgo = Math.floor(dateAgoDifference / seconds);

  if (secondsAgo <= 60) {
    const secondsData =
      secondsAgo <= 1
        ? `${secondsAgo + 1} Second ago`
        : `${secondsAgo} Seconds ago`;
    return secondsData;
  }

  if (minutesAgo <= 60) {
    //minutesAgo = Math.floor(minutesAgo / 60);

    //console.log(minutesAgo);

    const minutesData =
      minutesAgo <= 1 ? `${minutesAgo} Min ago` : `${minutesAgo} Mins ago`;
    return minutesData;
  }

  if (hoursAgo >= 24) {
    hoursAgo = Math.floor(hoursAgo / 24);
    //return `${hoursAgo} Days Ago`

    const hoursData =
      hoursAgo <= 1 ? `${hoursAgo} Day ago` : `${hoursAgo} Days ago`;
    return hoursData;
  }

  //return `${minutesAgo} Mins Ago`
}

export function dateFormat(dateParam) {
  const date = new Date(dateParam);

  // Format the date with the month as text
  const options = {
    year: "numeric",
    day: "numeric",
    month: "long" // 'long' for full month name, 'short' for abbreviated
  };
  // Localize and format the date
  const formattedDate = date.toLocaleString("en-US", options);

  return formattedDate;
}
