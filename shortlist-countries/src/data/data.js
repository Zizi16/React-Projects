/* ---- countries ----- */

const data = [
  {
    id: 0,
    name: "Somaliland",
    capital: "Hargeisa",
    color: "africa"
  },
  {
    id: 1,
    name: "South Georgia and South Sandwich Islands",
    capital: "King Edward Point",
    color: "antarctica"
  },
  {
    id: 2,
    name: "French Southern and Antarctic Lands",
    capital: "Port-aux-Fran√ßais",
    color: "antarctica"
  },
  {
    id: 3,
    name: "Palestine",
    capital: "Jerusalem",
    color: "asia"
  },
  {
    id: 4,
    name: "Aland Islands",
    capital: "Mariehamn",
    color: "europe"
  },
  {
    id: 5,
    name: "Nauru",
    capital: "Yaren",
    color: "australia"
  },
  {
    id: 6,
    name: "Saint Martin",
    capital: "Marigot",
    color: "north-america"
  },
  {
    id: 7,
    name: "Tokelau",
    capital: "Atafu",
    color: "australia"
  },
  {
    id: 8,
    name: "Western Sahara",
    capital: "El-Aai√∫n",
    color: "africa"
  },
  {
    id: 9,
    name: "Afghanistan",
    capital: "Kabul",
    color: "asia"
  },
  {
    id: 10,
    name: "Albania",
    capital: "Tirana",
    color: "europe"
  },
  {
    id: 11,
    name: "Algeria",
    capital: "Algiers",
    color: "africa"
  },
  {
    id: 12,
    name: "American Samoa",
    capital: "Pago Pago",
    color: "australia"
  },
  {
    id: 13,
    name: "Andorra",
    capital: "Andorra la Vella",
    color: "europe"
  },
  {
    id: 14,
    name: "Angola",
    capital: "Luanda",
    color: "africa"
  },
  {
    id: 15,
    name: "Anguilla",
    capital: "The Valley",
    color: "north-america"
  },
  {
    id: 16,
    name: "Antigua and Barbuda",
    capital: "Saint John's",
    color: "north-america"
  },
  {
    id: 17,
    name: "Argentina",
    capital: "Buenos Aires",
    color: "south-america"
  },
  {
    id: 18,
    name: "Armenia",
    capital: "Yerevan",
    color: "europe"
  },
  {
    id: 19,
    name: "Aruba",
    capital: "Oranjestad",
    color: "north-america"
  },
  {
    id: 20,
    name: "Australia",
    capital: "Canberra",
    color: "australia"
  },
  {
    id: 21,
    name: "Austria",
    capital: "Vienna",
    color: "europe"
  },
  {
    id: 22,
    name: "Azerbaijan",
    capital: "Baku",
    color: "europe"
  },
  {
    id: 23,
    name: "Bahamas",
    capital: "Nassau",
    color: "north-america"
  },
  {
    id: 24,
    name: "Bahrain",
    capital: "Manama",
    color: "asia"
  },
  {
    id: 25,
    name: "Bangladesh",
    capital: "Dhaka",
    color: "asia"
  },
  {
    id: 26,
    name: "Barbados",
    capital: "Bridgetown",
    color: "north-america"
  },
  {
    id: 27,
    name: "Belarus",
    capital: "Minsk",
    color: "europe"
  },
  {
    id: 28,
    name: "Belgium",
    capital: "Brussels",
    color: "europe"
  },
  {
    id: 29,
    name: "Belize",
    capital: "Belmopan",
    color: "central-america"
  },
  {
    id: 30,
    name: "Benin",
    capital: "Porto-Novo",
    color: "africa"
  },
  {
    id: 31,
    name: "Bermuda",
    capital: "Hamilton",
    color: "north-america"
  },
  {
    id: 32,
    name: "Bhutan",
    capital: "Thimphu",
    color: "asia"
  },
  {
    id: 33,
    name: "Bolivia",
    capital: "La Paz",
    color: "south-america"
  },
  {
    id: 34,
    name: "Bosnia and Herzegovina",
    capital: "Sarajevo",
    color: "europe"
  },
  {
    id: 35,
    name: "Botswana",
    capital: "Gaborone",
    color: "africa"
  },
  {
    id: 36,
    name: "Brazil",
    capital: "Brasilia",
    color: "south-america"
  },
  {
    id: 37,
    name: "British Virgin Islands",
    capital: "Road Town",
    color: "north-america"
  },
  {
    id: 38,
    name: "Brunei Darussalam",
    capital: "Bandar Seri Begawan",
    color: "asia"
  },
  {
    id: 39,
    name: "Bulgaria",
    capital: "Sofia",
    color: "europe"
  },
  {
    id: 40,
    name: "Burkina Faso",
    capital: "Ouagadougou",
    color: "africa"
  },
  {
    id: 41,
    name: "Myanmar",
    capital: "Rangoon",
    color: "asia"
  },
  {
    id: 42,
    name: "Burundi",
    capital: "Bujumbura",
    color: "africa"
  },
  {
    id: 43,
    name: "Cambodia",
    capital: "Phnom Penh",
    color: "asia"
  },
  {
    id: 44,
    name: "Cameroon",
    capital: "Yaounde",
    color: "africa"
  },
  {
    id: 45,
    name: "Canada",
    capital: "Ottawa",
    color: "central-america"
  },
  {
    id: 46,
    name: "Cape Verde",
    capital: "Praia",
    color: "africa"
  },
  {
    id: 47,
    name: "Cayman Islands",
    capital: "George Town",
    color: "north-america"
  },
  {
    id: 48,
    name: "Central African Republic",
    capital: "Bangui",
    color: "africa"
  },
  {
    id: 49,
    name: "Chad",
    capital: "N'Djamena",
    color: "africa"
  },
  {
    id: 50,
    name: "Chile",
    capital: "Santiago",
    color: "south-america"
  },
  {
    id: 51,
    name: "China",
    capital: "Beijing",
    color: "asia"
  },
  {
    id: 52,
    name: "Christmas Island",
    capital: "The Settlement",
    color: "australia"
  },
  {
    id: 53,
    name: "Cocos Islands",
    capital: "West Island",
    color: "australia"
  },
  {
    id: 54,
    name: "Colombia",
    capital: "Bogota",
    color: "south-america"
  },
  {
    id: 55,
    name: "Comoros",
    capital: "Moroni",
    color: "africa"
  },
  {
    id: 56,
    name: "Democratic Republic of the Congo",
    capital: "Kinshasa",
    color: "africa"
  },
  {
    id: 57,
    name: "Republic of Congo",
    capital: "Brazzaville",
    color: "africa"
  },
  {
    id: 58,
    name: "Cook Islands",
    capital: "Avarua",
    color: "australia"
  },
  {
    id: 59,
    name: "Costa Rica",
    capital: "San Jose",
    color: "central-america"
  },
  {
    id: 60,
    name: "Cote d'Ivoire",
    capital: "Yamoussoukro",
    color: "africa"
  },
  {
    id: 61,
    name: "Croatia",
    capital: "Zagreb",
    color: "europe"
  },
  {
    id: 62,
    name: "Cuba",
    capital: "Havana",
    color: "north-america"
  },
  {
    id: 63,
    name: "Curaçao",
    capital: "Willemstad",
    color: "north-america"
  },
  {
    id: 64,
    name: "Cyprus",
    capital: "Nicosia",
    color: "europe"
  },
  {
    id: 65,
    name: "Czech Republic",
    capital: "Prague",
    color: "europe"
  },
  {
    id: 66,
    name: "Denmark",
    capital: "Copenhagen",
    color: "europe"
  },
  {
    id: 67,
    name: "Djibouti",
    capital: "Djibouti",
    color: "africa"
  },
  {
    id: 68,
    name: "Dominica",
    capital: "Roseau",
    color: "north-america"
  },
  {
    id: 69,
    name: "Dominican Republic",
    capital: "Santo Domingo",
    color: "north-america"
  },
  {
    id: 70,
    name: "Ecuador",
    capital: "Quito",
    color: "south-america"
  },
  {
    id: 71,
    name: "Egypt",
    capital: "Cairo",
    color: "africa"
  },
  {
    id: 72,
    name: "El Salvador",
    capital: "San Salvador",
    color: "central-america"
  },
  {
    id: 73,
    name: "Equatorial Guinea",
    capital: "Malabo",
    color: "africa"
  },
  {
    id: 74,
    name: "Eritrea",
    capital: "Asmara",
    color: "africa"
  },
  {
    id: 75,
    name: "Estonia",
    capital: "Tallinn",
    color: "europe"
  },
  {
    id: 76,
    name: "Ethiopia",
    capital: "Addis Ababa",
    color: "africa"
  },
  {
    id: 77,
    name: "Falkland Islands",
    capital: "Stanley",
    color: "south-america"
  },
  {
    id: 78,
    name: "Faroe Islands",
    capital: "Torshavn",
    color: "europe"
  },
  {
    id: 79,
    name: "Fiji",
    capital: "Suva",
    color: "australia"
  },
  {
    id: 80,
    name: "Finland",
    capital: "Helsinki",
    color: "europe"
  },
  {
    id: 81,
    name: "France",
    capital: "Paris",
    color: "europe"
  },
  {
    id: 82,
    name: "French Polynesia",
    capital: "Papeete",
    color: "australia"
  },
  {
    id: 83,
    name: "Gabon",
    capital: "Libreville",
    color: "africa"
  },
  {
    id: 84,
    name: "The Gambia",
    capital: "Banjul",
    color: "africa"
  },
  {
    id: 85,
    name: "Georgia",
    capital: "Tbilisi",
    color: "europe"
  },
  {
    id: 86,
    name: "Germany",
    capital: "Berlin",
    color: "europe"
  },
  {
    id: 87,
    name: "Ghana",
    capital: "Accra",
    color: "africa"
  },
  {
    id: 88,
    name: "Gibraltar",
    capital: "Gibraltar",
    color: "europe"
  },
  {
    id: 89,
    name: "Greece",
    capital: "Athens",
    color: "europe"
  },
  {
    id: 90,
    name: "Greenland",
    capital: "Nuuk",
    color: "central-america"
  },
  {
    id: 91,
    name: "Grenada",
    capital: "Saint George's",
    color: "north-america"
  },
  {
    id: 92,
    name: "Guam",
    capital: "Hagatna",
    color: "australia"
  },
  {
    id: 93,
    name: "Guatemala",
    capital: "Guatemala City",
    color: "central-america"
  },
  {
    id: 94,
    name: "Guernsey",
    capital: "Saint Peter Port",
    color: "europe"
  },
  {
    id: 95,
    name: "Guinea",
    capital: "Conakry",
    color: "africa"
  },
  {
    id: 96,
    name: "Guinea-Bissau",
    capital: "Bissau",
    color: "africa"
  },
  {
    id: 97,
    name: "Guyana",
    capital: "Georgetown",
    color: "south-america"
  },
  {
    id: 98,
    name: "Haiti",
    capital: "Port-au-Prince",
    color: "north-america"
  },
  {
    id: 99,
    name: "Vatican City",
    capital: "Vatican City",
    color: "europe"
  },
  {
    id: 100,
    name: "Honduras",
    capital: "Tegucigalpa",
    color: "central-america"
  },
  {
    id: 101,
    name: "Hungary",
    capital: "Budapest",
    color: "europe"
  },
  {
    id: 102,
    name: "Iceland",
    capital: "Reykjavik",
    color: "europe"
  },
  {
    id: 103,
    name: "India",
    capital: "New Delhi",
    color: "asia"
  },
  {
    id: 104,
    name: "Indonesia",
    capital: "Jakarta",
    color: "asia"
  },
  {
    id: 105,
    name: "Iran",
    capital: "Tehran",
    color: "asia"
  },
  {
    id: 106,
    name: "Iraq",
    capital: "Baghdad",
    color: "asia"
  },
  {
    id: 107,
    name: "Ireland",
    capital: "Dublin",
    color: "europe"
  },
  {
    id: 108,
    name: "Isle of Man",
    capital: "Douglas",
    color: "europe"
  },
  {
    id: 109,
    name: "Israel",
    capital: "Jerusalem",
    color: "asia"
  },
  {
    id: 110,
    name: "Italy",
    capital: "Rome",
    color: "europe"
  },
  {
    id: 111,
    name: "Jamaica",
    capital: "Kingston",
    color: "north-america"
  },
  {
    id: 112,
    name: "Japan",
    capital: "Tokyo",
    color: "asia"
  },
  {
    id: 113,
    name: "Jersey",
    capital: "Saint Helier",
    color: "europe"
  },
  {
    id: 114,
    name: "Jordan",
    capital: "Amman",
    color: "asia"
  },
  {
    id: 115,
    name: "Kazakhstan",
    capital: "Astana",
    color: "asia"
  },
  {
    id: 116,
    name: "Kenya",
    capital: "Nairobi",
    color: "africa"
  },
  {
    id: 117,
    name: "Kiribati",
    capital: "Tarawa",
    color: "australia"
  },
  {
    id: 118,
    name: "North Korea",
    capital: "Pyongyang",
    color: "asia"
  },
  {
    id: 119,
    name: "South Korea",
    capital: "Seoul",
    color: "asia"
  },
  {
    id: 120,
    name: "Kosovo",
    capital: "Pristina",
    color: "europe"
  },
  {
    id: 121,
    name: "Kuwait",
    capital: "Kuwait City",
    color: "asia"
  },
  {
    id: 122,
    name: "Kyrgyzstan",
    capital: "Bishkek",
    color: "asia"
  },
  {
    id: 123,
    name: "Laos",
    capital: "Vientiane",
    color: "asia"
  },
  {
    id: 124,
    name: "Latvia",
    capital: "Riga",
    color: "europe"
  },
  {
    id: 125,
    name: "Lebanon",
    capital: "Beirut",
    color: "asia"
  },
  {
    id: 126,
    name: "Lesotho",
    capital: "Maseru",
    color: "africa"
  },
  {
    id: 127,
    name: "Liberia",
    capital: "Monrovia",
    color: "africa"
  },
  {
    id: 128,
    name: "Libya",
    capital: "Tripoli",
    color: "africa"
  },
  {
    id: 129,
    name: "Liechtenstein",
    capital: "Vaduz",
    color: "europe"
  },
  {
    id: 130,
    name: "Lithuania",
    capital: "Vilnius",
    color: "europe"
  },
  {
    id: 131,
    name: "Luxembourg",
    capital: "Luxembourg",
    color: "europe"
  },
  {
    id: 132,
    name: "Macedonia",
    capital: "Skopje",
    color: "europe"
  },
  {
    id: 133,
    name: "Madagascar",
    capital: "Antananarivo",
    color: "africa"
  },
  {
    id: 134,
    name: "Malawi",
    capital: "Lilongwe",
    color: "africa"
  },
  {
    id: 135,
    name: "Malaysia",
    capital: "Kuala Lumpur",
    color: "asia"
  },
  {
    id: 136,
    name: "Maldives",
    capital: "Male",
    color: "asia"
  },
  {
    id: 137,
    name: "Mali",
    capital: "Bamako",
    color: "africa"
  },
  {
    id: 138,
    name: "Malta",
    capital: "Valletta",
    color: "europe"
  },
  {
    id: 139,
    name: "Marshall Islands",
    capital: "Majuro",
    color: "australia"
  },
  {
    id: 140,
    name: "Mauritania",
    capital: "Nouakchott",
    color: "africa"
  },
  {
    id: 141,
    name: "Mauritius",
    capital: "Port Louis",
    color: "africa"
  },
  {
    id: 142,
    name: "Mexico",
    capital: "Mexico City",
    color: "central-america"
  },
  {
    id: 143,
    name: "Federated States of Micronesia",
    capital: "Palikir",
    color: "australia"
  },
  {
    id: 144,
    name: "Moldova",
    capital: "Chisinau",
    color: "europe"
  },
  {
    id: 145,
    name: "Monaco",
    capital: "Monaco",
    color: "europe"
  },
  {
    id: 146,
    name: "Mongolia",
    capital: "Ulaanbaatar",
    color: "asia"
  },
  {
    id: 147,
    name: "Montenegro",
    capital: "Podgorica",
    color: "europe"
  },
  {
    id: 148,
    name: "Montserrat",
    capital: "Plymouth",
    color: "north-america"
  },
  {
    id: 149,
    name: "Morocco",
    capital: "Rabat",
    color: "africa"
  },
  {
    id: 150,
    name: "Mozambique",
    capital: "Maputo",
    color: "africa"
  },
  {
    id: 151,
    name: "Namibia",
    capital: "Windhoek",
    color: "africa"
  },
  {
    id: 152,
    name: "Nepal",
    capital: "Kathmandu",
    color: "asia"
  },
  {
    id: 153,
    name: "Netherlands",
    capital: "Amsterdam",
    color: "europe"
  },
  {
    id: 154,
    name: "New Caledonia",
    capital: "Noumea",
    color: "australia"
  },
  {
    id: 155,
    name: "New Zealand",
    capital: "Wellington",
    color: "australia"
  },
  {
    id: 156,
    name: "Nicaragua",
    capital: "Managua",
    color: "central-america"
  },
  {
    id: 157,
    name: "Niger",
    capital: "Niamey",
    color: "africa"
  },
  {
    id: 158,
    name: "Nigeria",
    capital: "Abuja",
    color: "africa"
  },
  {
    id: 159,
    name: "Niue",
    capital: "Alofi",
    color: "australia"
  },
  {
    id: 160,
    name: "Norfolk Island",
    capital: "Kingston",
    color: "australia"
  },
  {
    id: 161,
    name: "Northern Mariana Islands",
    capital: "Saipan",
    color: "australia"
  },
  {
    id: 162,
    name: "Norway",
    capital: "Oslo",
    color: "europe"
  },
  {
    id: 163,
    name: "Oman",
    capital: "Muscat",
    color: "asia"
  },
  {
    id: 164,
    name: "Pakistan",
    capital: "Islamabad",
    color: "asia"
  },
  {
    id: 165,
    name: "Palau",
    capital: "Melekeok",
    color: "australia"
  },
  {
    id: 166,
    name: "Panama",
    capital: "Panama City",
    color: "central-america"
  },
  {
    id: 167,
    name: "Papua New Guinea",
    capital: "Port Moresby",
    color: "australia"
  },
  {
    id: 168,
    name: "Paraguay",
    capital: "Asuncion",
    color: "south-america"
  },
  {
    id: 169,
    name: "Peru",
    capital: "Lima",
    color: "south-america"
  },
  {
    id: 170,
    name: "Philippines",
    capital: "Manila",
    color: "asia"
  },
  {
    id: 171,
    name: "Pitcairn Islands",
    capital: "Adamstown",
    color: "australia"
  },
  {
    id: 172,
    name: "Poland",
    capital: "Warsaw",
    color: "europe"
  },
  {
    id: 173,
    name: "Portugal",
    capital: "Lisbon",
    color: "europe"
  },
  {
    id: 174,
    name: "Puerto Rico",
    capital: "San Juan",
    color: "north-america"
  },
  {
    id: 175,
    name: "Qatar",
    capital: "Doha",
    color: "asia"
  },
  {
    id: 176,
    name: "Romania",
    capital: "Bucharest",
    color: "europe"
  },
  {
    id: 177,
    name: "Russia",
    capital: "Moscow",
    color: "europe"
  },
  {
    id: 178,
    name: "Rwanda",
    capital: "Kigali",
    color: "africa"
  },
  {
    id: 179,
    name: "Saint Barthelemy",
    capital: "Gustavia",
    color: "north-america"
  },
  {
    id: 180,
    name: "Saint Helena",
    capital: "Jamestown",
    color: "africa"
  },
  {
    id: 181,
    name: "Saint Kitts and Nevis",
    capital: "Basseterre",
    color: "north-america"
  },
  {
    id: 182,
    name: "Saint Lucia",
    capital: "Castries",
    color: "north-america"
  },
  {
    id: 183,
    name: "Saint Pierre and Miquelon",
    capital: "Saint-Pierre",
    color: "central-america"
  },
  {
    id: 184,
    name: "Saint Vincent and the Grenadines",
    capital: "Kingstown",
    color: "central-america"
  },
  {
    id: 185,
    name: "Samoa",
    capital: "Apia",
    color: "australia"
  },
  {
    id: 186,
    name: "San Marino",
    capital: "San Marino",
    color: "europe"
  },
  {
    id: 187,
    name: "Sao Tome and Principe",
    capital: "Sao Tome",
    color: "africa"
  },
  {
    id: 188,
    name: "Saudi Arabia",
    capital: "Riyadh",
    color: "asia"
  },
  {
    id: 189,
    name: "Senegal",
    capital: "Dakar",
    color: "africa"
  },
  {
    id: 190,
    name: "Serbia",
    capital: "Belgrade",
    color: "europe"
  },
  {
    id: 191,
    name: "Seychelles",
    capital: "Victoria",
    color: "africa"
  },
  {
    id: 192,
    name: "Sierra Leone",
    capital: "Freetown",
    color: "africa"
  },
  {
    id: 193,
    name: "Singapore",
    capital: "Singapore",
    color: "asia"
  },
  {
    id: 194,
    name: "Sint Maarten",
    capital: "Philipsburg",
    color: "north-america"
  },
  {
    id: 195,
    name: "Slovakia",
    capital: "Bratislava",
    color: "europe"
  },
  {
    id: 196,
    name: "Slovenia",
    capital: "Ljubljana",
    color: "europe"
  },
  {
    id: 197,
    name: "Solomon Islands",
    capital: "Honiara",
    color: "australia"
  },
  {
    id: 198,
    name: "Somalia",
    capital: "Mogadishu",
    color: "africa"
  },
  {
    id: 199,
    name: "South Africa",
    capital: "Pretoria",
    color: "africa"
  },
  {
    id: 200,
    name: "South Sudan",
    capital: "Juba",
    color: "africa"
  },
  {
    id: 201,
    name: "Spain",
    capital: "Madrid",
    color: "europe"
  },
  {
    id: 202,
    name: "Sri Lanka",
    capital: "Colombo",
    color: "asia"
  },
  {
    id: 203,
    name: "Sudan",
    capital: "Khartoum",
    color: "africa"
  },
  {
    id: 204,
    name: "Suriname",
    capital: "Paramaribo",
    color: "south-america"
  },
  {
    id: 205,
    name: "Svalbard",
    capital: "Longyearbyen",
    color: "europe"
  },
  {
    id: 206,
    name: "Swaziland",
    capital: "Mbabane",
    color: "africa"
  },
  {
    id: 207,
    name: "Sweden",
    capital: "Stockholm",
    color: "europe"
  },
  {
    id: 208,
    name: "Switzerland",
    capital: "Bern",
    color: "europe"
  },
  {
    id: 209,
    name: "Syria",
    capital: "Damascus",
    color: "asia"
  },
  {
    id: 210,
    name: "Taiwan",
    capital: "Taipei",
    color: "asia"
  },
  {
    id: 211,
    name: "Tajikistan",
    capital: "Dushanbe",
    color: "asia"
  },
  {
    id: 212,
    name: "Tanzania",
    capital: "Dar es Salaam",
    color: "africa"
  },
  {
    id: 213,
    name: "Thailand",
    capital: "Bangkok",
    color: "asia"
  },
  {
    id: 214,
    name: "Timor-Leste",
    capital: "Dili",
    color: "asia"
  },
  {
    id: 215,
    name: "Togo",
    capital: "Lome",
    color: "africa"
  },
  {
    id: 216,
    name: "Tonga",
    capital: "Nuku'alofa",
    color: "australia"
  },
  {
    id: 217,
    name: "Trinidad and Tobago",
    capital: "Port of Spain",
    color: "north-america"
  },
  {
    id: 218,
    name: "Tunisia",
    capital: "Tunis",
    color: "africa"
  },
  {
    id: 219,
    name: "Turkey",
    capital: "Ankara",
    color: "europe"
  },
  {
    id: 220,
    name: "Turkmenistan",
    capital: "Ashgabat",
    color: "asia"
  },
  {
    id: 221,
    name: "Turks and Caicos Islands",
    capital: "Grand Turk",
    color: "north-america"
  },
  {
    id: 222,
    name: "Tuvalu",
    capital: "Funafuti",
    color: "australia"
  },
  {
    id: 223,
    name: "Uganda",
    capital: "Kampala",
    color: "africa"
  },
  {
    id: 224,
    name: "Ukraine",
    capital: "Kyiv",
    color: "europe"
  },
  {
    id: 225,
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    color: "asia"
  },
  {
    id: 226,
    name: "United Kingdom",
    capital: "London",
    color: "europe"
  },
  {
    id: 227,
    name: "United States",
    capital: "Washington",
    color: "central-america"
  },
  {
    id: 228,
    name: "Uruguay",
    capital: "Montevideo",
    color: "south-america"
  },
  {
    id: 229,
    name: "Uzbekistan",
    capital: "Tashkent",
    color: "asia"
  },
  {
    id: 230,
    name: "Vanuatu",
    capital: "Port-Vila",
    color: "australia"
  },
  {
    id: 231,
    name: "Venezuela",
    capital: "Caracas",
    color: "south-america"
  },
  {
    id: 232,
    name: "Vietnam",
    capital: "Hanoi",
    color: "asia"
  },
  {
    id: 233,
    name: "US Virgin Islands",
    capital: "Charlotte Amalie",
    color: "north-america"
  },
  {
    id: 234,
    name: "Wallis and Futuna",
    capital: "Mata-Utu",
    color: "australia"
  },
  {
    id: 235,
    name: "Yemen",
    capital: "Sanaa",
    color: "asia"
  },
  {
    id: 236,
    name: "Zambia",
    capital: "Lusaka",
    color: "africa"
  },
  {
    id: 237,
    name: "Zimbabwe",
    capital: "Harare",
    color: "africa"
  },
  // {
  //   id: 238,
  //   name: "US Minor Outlying Islands",
  //   continent: "UM",
  //   capital: "Washington",
  //   color: "um"
  // },
  {
    id: 239,
    name: "Antarctica",
    capital: "N/A",
    color: "antarctica"
  },
  {
    id: 240,
    name: "Northern Cyprus",
    capital: "North Nicosia",
    color: "europe"
  },
  {
    id: 241,
    name: "Hong Kong",
    capital: "N/A",
    color: "asia"
  },
  {
    id: 242,
    name: "Heard Island and McDonald Islands",
    capital: "N/A",
    color: "antarctica"
  },
  {
    id: 243,
    name: "British Indian Ocean Territory",
    capital: "Diego Garcia",
    color: "africa"
  },
  {
    id: 244,
    name: "Macau",
    capital: "N/A",
    color: "asia"
  }
];

export default data;
