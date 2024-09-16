
const urlPathname = window.location.href;

let originURL

if (urlPathname.toString().includes("localhost")) {
    originURL = "http://localhost:5000/api/v1";
} else {
    originURL = "https://real-estate-backend-2nky.onrender.com/api/v1";
}


export const cities = [
    "Nampundwe",
    "Matero",
    "Kamwala South",
    "New Kasama",
    "Ibex Hill",
    "Chelston",
    "Kabulonga",
    "Accra",
    "Barlaston Park",
    "Chalala",
    "Chamba",
    "Chibombo",
    "Chilanga",
    "Chilanga Mount Makulu",
    "Chililabombwe",
    "Chinama",
    "Chingola",
    "Chipata",
    "Chisamba",
    "Choma",
    "Chongwe",
    "Harare",
    "Hentiesbaai",
    "Isoka",
    "Kabwe",
    "Kafue",
    "Kafue Estate",
    "Kalimba",
    "Kalomo",
    "Kalulushi",
    "Kanyama",
    "Kapiri Mposhi",
    "Kasama",
    "Kasempa",
    "Katuba",
    "Kazungula",
    "Kitwe",
    "Liivingstoe",
    "Lilayi",
    "Livingstone",
    "Luanshya",
    "Lunashya",
    "Lusaka",
    "Lusaka 10 miles",
    "Lusaka District",
    "Lusaka Town",
    "Lusaka West",
    "Lusaka,Zambia",
    "Lusaka's",
    "Makeni",
    "Makeni, Lusaka, Lusaka",
    "Masaiti",
    "Mazabuka",
    "Mbabane",
    "Mkushi",
    "Mkushi River",
    "Mongu",
    "Monze",
    "Mpemba",
    "Mpika",
    "Mufulira",
    "Muyombe",
    "Mwembeshi",
    "Ndola",
    "nksushi",
    "Noida",
    "Nyimba",
    "Pittsburg",
    "Roma",
    "Rufunsa",
    "Serenje",
    "Sesheke",
    "Silver Rest",
    "Situmbeko",
    "Solwezi",
    "Zambezi"
  ];
  

export const URL = originURL




