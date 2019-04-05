console.log("Connected");

////////// DOM variables //////////
var 
  domVar, 
  plateVar, 
  currentTrailer, 
  umegaTrailers, 
  activator;
// Inputed data
domVar = {
  trailerChooser:     document.getElementById("chooseTrailer"),
  countryChooser:     document.getElementById("chooseCountry"),
  certificateChooser: document.getElementById("chooseCertificate"),
  inputYear:          document.getElementById("inputYear"),
  inputPIN:           document.getElementById("inputPin"),
  pdfButton:          document.getElementById("pdfBuild")
};
// Plate hooks
plateVar = {
  category:     document.getElementById("category"),
  type:         document.getElementById("type"),
  variant:      document.getElementById("variant"),
  version:      document.getElementById("version"),
  year:         document.getElementById("year"),
  weight:       document.getElementById("weight"),
  roadLoad:     document.getElementById("roadLoad"),
  maxLoad:      document.getElementById("maxLoad"),
  certificate:  document.getElementById("certificate"),
  pin:          document.getElementById("pin"),
  country:      document.getElementById("country"),
  road:         document.getElementById("road"),
  full:         document.getElementById("full"),
  drawbar:      document.getElementById("drawbar"),
  axle1:        document.getElementById("axle1"),
  axle2:        document.getElementById("axle2"),
  axle3:        document.getElementById("axle3"),
  roadDrawbar:  document.getElementById("roadDrawbar"),
  roadAxle1:    document.getElementById("roadAxle1"),
  roadAxle2:    document.getElementById("roadAxle2"),
  roadAxle3:    document.getElementById("roadAxle3"),
  drawbarLoad:  document.getElementById("drawbarLoad"),
  axleLoad:     document.getElementById("axleLoad"),
  b1t1:         document.getElementById("b1t1"),
  b1t2:         document.getElementById("b1t2"),
  b1t3:         document.getElementById("b1t3"),
  b2t1:         document.getElementById("b2t1"),
  b2t2:         document.getElementById("b2t2"),
  b2t3:         document.getElementById("b2t3"),
  b3t1:         document.getElementById("b3t1"),
  b3t2:         document.getElementById("b3t2"),
  b3t3:         document.getElementById("b3t3"),
  b4t1:         document.getElementById("b4t1"),
  b4t2:         document.getElementById("b4t2"),
  b4t3:         document.getElementById("b4t3"),
  plate:        document.getElementById("plate")
};
currentTrailer = {
  category:     "",
  type:         "",
  variant:      "",
  version:      "-",
  manufactured: 0,
  weight:       0,
  payload:      0,
  techPayload:  0,
  homologation: "-",
  vinCode:      "",
  country:      "",
  roadWeight:   0,
  couplingLoad: 0,
  couplingDval: 0,
  axleNumber:   0,
  axleLoadRoad: 0,
  axleLoadFull: 0,
  singleAxleRoad: 0,
  singleAxleFull: 0
};
//////////// Database /////////////
umegaTrailers = {
  gpp23:   {
    name:         "GPP23",
    category:     "S2a",
    variant:      "23",
    typeEC:       "GPP",
    weight:       7140,
    payload:      13860,
    techPayload:  18000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      },
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP23"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP23"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP23"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP23"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP23"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP23"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP23"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP23"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP23"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP23"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP23"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ASW23"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP23"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP23"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP23"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP23"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP23"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP23"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP23"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP23"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP23"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP23"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP23"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP23"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP23"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP23"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP23"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP23"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP23"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP23"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP23"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP23"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP23"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP23"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP23"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP23"
      }
    ]
  },
  gpp23hd:   {
    name:         "GPP23HD",
    category:     "S2a",
    variant:      "23HD",
    typeEC:       "GPP",
    weight:       7550,
    payload:      16450,
    techPayload:  24000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP23HD"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP23HD"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP23HD"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP23HD"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP23HD"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP23HD"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP23HD"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP23HD"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP23HD"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP23HD"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP23HD"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "GPP23HD"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP23HD"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP23HD"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP23HD"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP23HD"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP23HD"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP23HD"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP23HD"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP23HD"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP23HD"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP23HD"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP23HD"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP23HD"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP23HD"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP23HD"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP23HD"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP23HD"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP23HD"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP23HD"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP23HD"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP23HD"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP23HD"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP23HD"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP23HD"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP23HD"
      }
    ]
  },
  gpp27l:   {
    name:         "GPP27L",
    category:     "S2a",
    variant:      "27L",
    typeEC:       "GPP",
    weight:       8500,
    payload:      15500,
    techPayload:  27000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00029*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "GPP27"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "GPP27"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "GPP27"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "GPP27"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "GPP27"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "GPP27"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "GPP27"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "GPP27"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "GPP27"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "GPP27"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "GPP27"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "GPP27"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "GPP27"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "GPP27"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "GPP27"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "GPP27"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "GPP27"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "GPP27"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "GPP27"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "GPP27"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "GPP27"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "GPP27"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "GPP27"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "GPP27"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "GPP27"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "GPP27"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "GPP27"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "GPP27"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "GPP27"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "GPP27"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "GPP27"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "GPP27"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "GPP27"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "GPP27"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "GPP27"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "GPP27"
      }
    ]
  },
  pi20:   {
    name:         "PI20",
    category:     "S2a",
    variant:      "20",
    typeEC:       "PI",
    weight:       8370,
    payload:      14630,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00021*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "PI20"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "PI20"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "PI20"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "PI20"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "PI20"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "PI20"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "PI20"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "PI20"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "PI20"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "PI20"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "PI20"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "ASW24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "PI20"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "PI20"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "PI20"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "PI20"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "PI20"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "PI20"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "PI20"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "PI20"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "PI20"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "PI20"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "PI20"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "PI20"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "PI20"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "PI20"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "PI20"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "PI20"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "PI20"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "PI20"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "PI20"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "PI20"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "PI20"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "PI20"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "PI20"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "PI20"
      }
    ]
  },
  spc14bs:   {
    name:         "SPC14BS",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP14",
    weight:       4100,
    payload:      14000,
    techPayload:  14000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00023*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC14"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC14"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC14"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC14"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC14"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC14"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC14"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC14"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC14"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW19"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC14"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC14"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC14"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC14"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC14"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC14"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC14"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC14"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC14"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC14"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC14"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC14"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC14"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC14"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC14"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC14"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC14"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC14"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC14"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC14"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC14"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC14"
      }
    ]
  },
  spc16bs:   {
    name:         "SPC16BS",
    category:     "R3a",
    variant:      "16",
    typeEC:       "SPC16",
    weight:       5500,
    payload:      15500,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC16"
      }
    ]
  },
  spc18l:   {
    name:         "SPC18L",
    category:     "R3a",
    variant:      "L",
    typeEC:       "TIP19",
    weight:       7200,
    payload:      13800,
    techPayload:  19500,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00000*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }*/
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC20L"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC20L"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC20L"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC20L"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC20L"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC20L"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC20L"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC20L"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC20L"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC20L"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC20L"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC20L"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC20L"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC20L"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC20L"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC20L"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC20L"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC20L"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC20L"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC20L"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC20L"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC20L"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC20L"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC20L"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC20L"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC20L"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC20L"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC20L"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC20L"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC20L"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC20L"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC20L"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC20L"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC20L"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC20L"
      }
    ]
  },
  spc19bs:   {
    name:         "SPC19BS",
    category:     "R3a",
    variant:      "C",
    typeEC:       "TIP19",
    weight:       8200,
    payload:      15800,
    techPayload:  20000,
    roadWeight:   24000,
    axleNum:      2,
    couplingLoad: 4000,
    couplingDval: 31500,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00000*00"
      },*/
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC19"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC19"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC19"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC19"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC19"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC19"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC19"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC19"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC19"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC19"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC19"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW24"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC19"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC19"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC19"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC19"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC19"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC19"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC19"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC19"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC19"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC19"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC19"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC19"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC19"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC19"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC19"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC19"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC19"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC19"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC19"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC19"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC19"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC19"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC19"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC19"
      }
    ]
  },
  spc20bs:   {
    name:         "SPC20BS",
    category:     "R3a",
    variant:      "20",
    typeEC:       "SPC16",
    weight:       6700,
    payload:      15300,
    techPayload:  20000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 3000,
    couplingDval: 38000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*00"
      },
      {
        name: "Poland",
        number: "PL*4404*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPC20"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPC20"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPC20"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPC20"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPC20"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPC20"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPC20"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPC20"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPC20"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPC20"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPC20"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "TW21"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPC20"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPC20"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPC20"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPC20"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPC20"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPC20"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPC20"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPC20"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPC20"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPC20"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPC20"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP1/SPC20"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPC20"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPC20"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPC20"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPC20"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPC20"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPC20"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPC20"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPC20"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPC20"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPC20"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPC20"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPC20"
      }
    ]
  },
  spp10p:   {
    name:         "SPP10P",
    category:     "R3a",
    variant:      "10P",
    typeEC:       "SPP10",
    weight:       3500,
    payload:      14500,
    techPayload:  10000,
    roadWeight:   18000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 24000,
    certificate: [
      {
        name: "No certification",
        number: ""
      },
      /*{
        name: "European 167/2013",
        number: "e32*167/2013*00000*00"
      },*/
      {
        name: "Poland",
        number: "PL*44810*00"
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP10P"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP10P"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP10P"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP10P"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP10P"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP10P"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP10P"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP10P"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP10P"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP10P"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP10P"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPP10P"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP10P"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP10P"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP10P"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP10P"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP10P"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP10P"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP10P"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP10P"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP10P"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP10P"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP10P"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SP2/SPP10"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP10P"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP10P"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP10P"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP10P"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP10P"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP10P"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP10P"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP10P"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP10P"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP10P"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP10P"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP10P"
      }
    ]
  },
  spp16p:   {
    name:         "SPP16P",
    category:     "R3a",
    variant:      "P",
    typeEC:       "SPP16",
    weight:       4700,
    payload:      13300,
    techPayload:  16000,
    roadWeight:   21000,
    axleNum:      2,
    couplingLoad: 0,
    couplingDval: 30000,
    certificate: [
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name:   "Albania",
        locale: "al",
        type:   "SPP16"
      },
      {
        name:   "Austria",
        locale: "at",
        type:   "SPP16"
      },
      {
        name:   "Belgium",
        locale: "be",
        type:   "SPP16"
      },
      {
        name:   "Bosnia and Herzegovina",
        locale: "ba",
        type:   "SPP16"
      },
      {
        name:   "Bulgaria",
        locale: "bg",
        type:   "SPP16"
      },
      {
        name:   "Croatia",
        locale: "hr",
        type:   "SPP16"
      },
      {
        name:   "Czech Rep.",
        locale: "cz",
        type:   "SPP16"
      },
      {
        name:   "Denmark",
        locale: "dk",
        type:   "SPP16"
      },
      {
        name:   "Estonia",
        locale: "ee",
        type:   "SPP16"
      },
      {
        name:   "Finland",
        locale: "fi",
        type:   "SPP16"
      },
      {
        name:   "France",
        locale: "fr",
        type:   "SPP16"
      },
      {
        name:   "Germany",
        locale: "de",
        type:   "SPP16"
      },
      {
        name:   "Greece",
        locale: "gr",
        type:   "SPP16"
      },
      {
        name:   "Hungary",
        locale: "hu",
        type:   "SPP16"
      },
      {
        name:   "Ireland",
        locale: "ie",
        type:   "SPP16"
      },
      {
        name:   "Italy",
        locale: "it",
        type:   "SPP16"
      },
      {
        name:   "Latvia",
        locale: "lv",
        type:   "SPP16"
      },
      {
        name:   "Lithuania",
        locale: "lt",
        type:   "SPP16"
      },
      {
        name:   "Macedonia",
        locale: "mk",
        type:   "SPP16"
      },
      {
        name:   "Moldova",
        locale: "md",
        type:   "SPP16"
      },
      {
        name:   "Montenegro",
        locale: "me",
        type:   "SPP16"
      },
      {
        name:   "Netherlands",
        locale: "nl",
        type:   "SPP16"
      },
      {
        name:   "Norway",
        locale: "no",
        type:   "SPP16"
      },
      {
        name:   "Poland",
        locale: "pl",
        type:   "SPP16"
      },
      {
        name:   "Portugal",
        locale: "pt",
        type:   "SPP16"
      },
      {
        name:   "Romania",
        locale: "ro",
        type:   "SPP16"
      },
      {
        name:   "Russia",
        locale: "ru",
        type:   "SPP16"
      },
      {
        name:   "Serbia",
        locale: "rs",
        type:   "SPP16"
      },
      {
        name:   "Slovakia",
        locale: "sk",
        type:   "SPP16"
      },
      {
        name:   "Slovenia",
        locale: "si",
        type:   "SPP16"
      },
      {
        name:   "Spain",
        locale: "es",
        type:   "SPP16"
      },
      {
        name:   "Sweden",
        locale: "se",
        type:   "SPP16"
      },
      {
        name:   "Switzerland",
        locale: "ch",
        type:   "SPP16"
      },
      {
        name:   "Ukraine",
        locale: "ua",
        type:   "SPP16"
      },
      {
        name:   "United Kingdom",
        locale: "gb",
        type:   "SPP16"
      },
      {
        name:   "Other",
        locale: "univ",
        type:   "SPP16"
      }
    ]
  }
};
//// Logic for plates builder /////
activator = {
  // state variables (is choosed, is correct, etc)
  model:          {},
  certificates:   [],
  country:        [],
  countryName:    "",
  countryLocale:  "",
  certName:       "",
  certType:       "",
  manufacture:    0,
  numOfTrailers:  0,
  VINcode:        "",
  okVIN:          false,
  okCert:         false,
  // METHODS //
  checkup: function () {
    if (this.okVIN && this.okCert) {
      buildTrailer();
      activateElement("pdfButton");
    } else {
      deactivateElement("pdfButton");
    }
  }
};


function buildTrailer () {
  currentTrailer.category       = activator.model.category;
  currentTrailer.type           = activator.certName === "European 167/2013" ? activator.model.typeEC : activator.country.type;
  currentTrailer.variant        = activator.model.variant;
  currentTrailer.version        = "-";
  currentTrailer.manufactured   = activator.manufacture;
  currentTrailer.weight         = activator.model.weight;
  currentTrailer.techPayload    = activator.model.techPayload;
  currentTrailer.payload        = activator.model.payload;
  currentTrailer.homologation   = activator.certType;
  currentTrailer.vinCode        = activator.VINcode;
  currentTrailer.country        = activator.countryLocale;
  currentTrailer.roadWeight     = activator.model.roadWeight;
  currentTrailer.couplingLoad   = activator.model.couplingLoad;
  currentTrailer.couplingDval   = activator.model.couplingDval;

  currentTrailer.axleNumber     = activator.model.axleNum;
  currentTrailer.axleLoadRoad   = currentTrailer.roadWeight - currentTrailer.couplingLoad;
  currentTrailer.axleLoadFull   = currentTrailer.techPayload + currentTrailer.weight - currentTrailer.couplingLoad;
  if (currentTrailer.country === "ru" || currentTrailer.country === "dk") {
    if (currentTrailer.axleNumber === 1) {
      currentTrailer.singleAxleRoad = currentTrailer.axleLoadRoad;
    } else if (currentTrailer.axleNumber === 2) {
      currentTrailer.singleAxleRoad = currentTrailer.axleLoadRoad/2 + " / " + currentTrailer.axleLoadRoad/2;
    } else if (currentTrailer.axleNumber === 3) {
      currentTrailer.singleAxleRoad = currentTrailer.axleLoadRoad/3 + " / " + currentTrailer.axleLoadRoad/3 + " / " + currentTrailer.axleLoadRoad/3;
    }
  } else {
    currentTrailer.singleAxleRoad = currentTrailer.axleLoadRoad / currentTrailer.axleNumber;
  }
  currentTrailer.singleAxleFull = currentTrailer.axleLoadFull / currentTrailer.axleNumber;


  plateVar.category.innerText     = currentTrailer.category;
  plateVar.type.innerText         = currentTrailer.type;
  plateVar.variant.innerText      = currentTrailer.variant;
  plateVar.version.innerText      = currentTrailer.version;
  plateVar.year.innerText         = currentTrailer.manufactured;
  plateVar.weight.innerText       = currentTrailer.weight;
  plateVar.roadLoad.innerText     = currentTrailer.payload;
  plateVar.maxLoad.innerText      = currentTrailer.techPayload;
  plateVar.certificate.innerText  = currentTrailer.homologation;
  plateVar.pin.innerText          = currentTrailer.vinCode;
  plateVar.country.innerText      = currentTrailer.country.toUpperCase();  

  plateVar.road.innerText         = currentTrailer.roadWeight;
  plateVar.drawbar.innerText      = currentTrailer.couplingLoad;
  plateVar.axle1.innerText        = currentTrailer.singleAxleRoad;
  plateVar.axle2.innerText        = currentTrailer.axleNumber > 1 ? plateVar.axle1.innerText : "-" ;
  plateVar.axle3.innerText        = currentTrailer.axleNumber > 2 ? plateVar.axle1.innerText : "-" ;

  plateVar.full.innerText         = currentTrailer.weight + currentTrailer.techPayload;
  plateVar.roadDrawbar.innerText  = currentTrailer.couplingLoad;
  plateVar.roadAxle1.innerText    = currentTrailer.singleAxleFull;
  plateVar.roadAxle2.innerText    = currentTrailer.axleNumber > 1 ? plateVar.roadAxle1.innerText : "-" ;
  plateVar.roadAxle3.innerText    = currentTrailer.axleNumber > 2 ? plateVar.roadAxle1.innerText : "-" ;

  plateVar.drawbarLoad.innerText  = Math.round(parseFloat(currentTrailer.couplingLoad * 0.0098) * 100) / 100  + " kN";
  plateVar.axleLoad.innerText     = Math.round(parseFloat(currentTrailer.singleAxleRoad * 0.0098) * 100) / 100  + " kN";
  
  plateVar.b1t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 1500 ? 1500 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b2t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 8000 ? 8000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b3t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 18000 ? 18000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;
  plateVar.b4t1.innerText         = currentTrailer.category === "S2a" ? "-" : currentTrailer.couplingDval - currentTrailer.roadWeight > 18000 ? 18000 : currentTrailer.couplingDval - currentTrailer.roadWeight ;

  plateVar.b1t2.innerText         = "-";
  plateVar.b2t2.innerText         = "-";
  plateVar.b3t2.innerText         = "-";
  plateVar.b4t2.innerText         = "-";
  
  plateVar.b1t3.innerText         = "-";
  plateVar.b2t3.innerText         = "-";  
  plateVar.b3t3.innerText         = "-";
  plateVar.b4t3.innerText         = "-";
}

function resetData () {
  plateVar.plate.classList.remove("uniform", "rus", "witam", "noCertOld", "undefined");
  plateVar.plate.classList.add("undefined");
  plateVar.category.innerText = "-";
  plateVar.type.innerText = "-";
  plateVar.variant.innerText = "-";
  plateVar.version.innerText = "-";
  plateVar.year.innerText = "-";
  plateVar.weight.innerText = "-";
  plateVar.roadLoad.innerText = "-";
  plateVar.maxLoad.innerText = "-";
  plateVar.certificate.innerText = "-";
  plateVar.pin.innerText = "-";
  plateVar.country.innerText = "-";
  plateVar.road.innerText = "-";
  plateVar.full.innerText = "-";
  plateVar.drawbar.innerText = "-";
  plateVar.axle1.innerText = "-";
  plateVar.axle2.innerText = "-";
  plateVar.axle3.innerText = "-";
  plateVar.roadDrawbar.innerText = "-";
  plateVar.roadAxle1.innerText = "-";
  plateVar.roadAxle2.innerText = "-";
  plateVar.roadAxle3.innerText = "-";
  plateVar.drawbarLoad.innerText = "-";
  plateVar.axleLoad.innerText = "-";
  plateVar.b1t1.innerText = "-";
  plateVar.b1t2.innerText = "-";
  plateVar.b1t3.innerText = "-";
  plateVar.b2t1.innerText = "-";
  plateVar.b2t2.innerText = "-";
  plateVar.b2t3.innerText = "-";
  plateVar.b3t1.innerText = "-";
  plateVar.b3t2.innerText = "-";
  plateVar.b3t3.innerText = "-";
  plateVar.b4t1.innerText = "-";
  plateVar.b4t2.innerText = "-";
  plateVar.b4t3.innerText = "-";
}

function readYears() {
  // declaring an array of years for the dropdown
  var years = [];
  // filling an array with years from 1984 until now
  for (var i = new Date().getFullYear(); i >= 1984; i--) {
    years.push(i);
  }
  // creating and appending nodes to year dropdown (as options in select)
  for (var year in years) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(years[year]);
    nodeDOM.appendChild(nodeText);
    domVar.inputYear.appendChild(nodeDOM);
  }
  // setting current year as a default
  setYear();
}
function setYear() {
  activator.manufacture = domVar.inputYear.options[domVar.inputYear.selectedIndex].text;
}


function readTrailers() {
  for (var trailer in umegaTrailers) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(umegaTrailers[trailer].name);
    nodeDOM.appendChild(nodeText);
    domVar.trailerChooser.appendChild(nodeDOM);
    activator.numOfTrailers ++;
  }
}
function clearTrailers () {
  activator.model = "";
}
function selectTrailer () {
  activator.model = umegaTrailers[domVar.trailerChooser.options[domVar.trailerChooser.selectedIndex].text.toLowerCase()];
  readCountry();
}

function readCountry () {
  for (var i = 0; i < activator.model.country.length; i++) {
    var nodeDOM = document.createElement("option");
    var nodeText = document.createTextNode(activator.model.country[i].name);
    nodeDOM.appendChild(nodeText);
    domVar.countryChooser.appendChild(nodeDOM);
  }
}
function clearCountry () {
  while (domVar.countryChooser.length > 1) {
    domVar.countryChooser.removeChild(domVar.countryChooser.lastChild);
  }
  clearCertification();
  activator.country = [];
  activator.countryName = "";
  activator.countryLocale = "";
}
function selectCountry () {
  var selection = domVar.countryChooser.options[domVar.countryChooser.selectedIndex].text;
  for (var i = 0; i < activator.model.country.length; i++) {
    var currentCountry = activator.model.country[i];
    if (currentCountry.name === selection) {
      activator.country = activator.model.country[i];
      activator.countryName = activator.model.country[i].name;
      activator.countryLocale = activator.model.country[i].locale;
    }
  }
  readCertification();
}

function readCertification () {
  for (var i = 0; i < activator.model.certificate.length; i++) {
    var currentCert = activator.model.certificate[i];
    if ( currentCert.name === "No certification" || currentCert.name === "European 167/2013" || currentCert.name === activator.countryName) {
      activator.certificates.push(currentCert);
      var nodeDOM = document.createElement("option");
      var nodeText = document.createTextNode(activator.model.certificate[i].name);
      nodeDOM.appendChild(nodeText);
      domVar.certificateChooser.appendChild(nodeDOM);
    }
  }
}
function clearCertification () {
  while (domVar.certificateChooser.length > 1) {
    domVar.certificateChooser.removeChild(domVar.certificateChooser.lastChild);
  }
  activator.certificates = [];
  activator.certName = "";
  activator.certType = "";
  setForm ("undefined");
}
function selectCertification () {
  var selected = domVar.certificateChooser.options[domVar.certificateChooser.selectedIndex].text;
  for (var i = 0; i < activator.certificates.length; i++) {
    if (selected === activator.certificates[i].name) {
      activator.certName = activator.certificates[i].name;
      activator.certType = activator.certificates[i].number;
      activator.okCert = true;
    }
  }
}

// setup table form
function setForm (tableType) {
  plateVar.plate.classList.remove("uniform", "rus", "witam", "nocertOld", "undefined");
  plateVar.plate.classList.add(tableType);
}
function chooseForm () {
  switch (activator.country.locale) {
    case 'ru':
      setForm("rus");
      break;
    case 'dk':
      if (activator.certName === "European 167/2013") {
        setForm("uniform");
      } else {
        setForm("nocertOld")
      }
      break;
    case 'undef':
      setForm("undefined");
      break;
    case 'pl':
      if (activator.certName === "European 167/2013") {
        setForm("uniform");
      } else {
        setForm("witam")
      }
      break;
    default:
      setForm("uniform");
  }
}

function activateElement(domNode) {
  domVar[domNode].classList.remove("deactivated", "activated");
  domVar[domNode].classList.add("activated");
}
function deactivateElement(domNode) {
  domVar[domNode].classList.remove("deactivated", "activated");
  domVar[domNode].classList.add("deactivated");
}

function getVIN () {
  activator.VINcode = domVar.inputPIN.value.toUpperCase();
  //console.log(activator.VINcode);
}
function reactVIN (cssClass) {
  domVar.inputPIN.classList.remove("noPin", "pendingPin", "validPin", "invalidPin");
  domVar.inputPIN.classList.add(cssClass);
}
function validateVIN () {
  var vinValid = false;
  switch (activator.VINcode.length) {
    case 1:   
      vinValid =  /U/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 2:   
      vinValid =  /UM/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 3:   
      vinValid =  /UME/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 4:   
      vinValid =  /UME[\dA-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 5:   
      vinValid =  /UME[\dA-Z][A-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 6:   
      vinValid =  /UME[\dA-Z][A-Z]{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 7:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 8:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 9:   
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 10:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 11:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 12:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{2}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 13:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{3}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 14:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{4}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 15:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{5}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    case 16:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{6}/g.test(activator.VINcode); 
      vinValid ? reactVIN("pendingPin") : reactVIN("invalidPin");
      activator.okVIN = false;
      break;
    default:  
      vinValid =  /UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{7}/g.test(activator.VINcode);
      if (vinValid) {
        reactVIN("validPin");
        activator.okVIN = true;
      } else {
        reactVIN("invalidPin");
        activator.okVIN = false;
      }
      // add VIN to the cookies?
  }
  activator.checkup();
}

function trailerChange () {
  clearCountry();
  activator.okCert = false;
  selectTrailer();
  activator.checkup();
}
function countryChange () {
  clearCertification();
  activator.okCert = false;
  selectCountry();
  activator.checkup();
}
function certificateChange () {
  selectCertification();
  setForm ("undefined");
  chooseForm();
  activator.checkup();
}
function yearChange () {
  console.log("year has changed");
  setForm ("undefined");
  activator.checkup();
}
function VINChange () {
  getVIN();
  if (activator.VINcode.length) {
    validateVIN();
  } else {
    activator.okVIN = false;
    reactVIN("noPin");
    deactivateElement("pdfButton");
  }
}

function initialize () {
  readTrailers();
  deactivateElement("pdfButton");
  readYears();
  // 4) choose the year of production;
  // 5) input the PIN according to the regular expression "/UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{7}/g"
  // 6) if OK then activate domPDF generation.
  resetData();
}
// function exportPDF () {
//   doc.save('a4.pdf');
// }

//// WORKFLOW ///////
initialize();
domVar.trailerChooser.addEventListener('change', trailerChange);
domVar.countryChooser.addEventListener('change', countryChange);
domVar.certificateChooser.addEventListener('change', certificateChange);
domVar.inputYear.addEventListener('change', yearChange);
domVar.inputPIN.addEventListener('input', VINChange);
// domVar.pdfButton.addEventListener('click', exportPDF);