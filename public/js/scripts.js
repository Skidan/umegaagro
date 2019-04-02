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
  // current trailer object model
  
  // METHODS:
  // buildTrailer() - write to the DOM;
};
//////////// Database /////////////
umegaTrailers = {
  spc14:   {
    name: "SPC14",
    category: "R3a",
    variant: "C",
    version: "-",
    year: "XXXX",
    weight: 5500,
    certificate: [
      {
        name: "European 167/2013",
        number: "e36*167/2013*00023*00"
      },
      {
        name: "pl",
        number: "SP1/SPC14"
      },
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name: "no matter",
        locale: "undef",
        type:   "SPC14"
      },
      {
        name: "Lithuania",
        locale: "lt",
        type:   "SPC14"
      },
      {
        name: "Latvia",
        locale: "lv",
        type:   "SPC14"
      },
      {
        name: "Estonia",
        locale: "ee",
        type:   "SPC14"
      },
      {
        name: "Poland",
        locale: "pl",
        type:   "SPC14"
      },
      {
        name: "Danmark",
        locale: "dk",
        type:   "SPC14"
      },
      {
        name: "Russia",
        locale: "ru",
        type:   "SPC14"
      },
      {
        name: "Serbia",
        locale: "rs",
        type:   "SPC14"
      },
      {
        name: "Ukraine",
        locale: "ua",
        type:   "SPC14"
      }
    ]
  },
  gpp23:  {
    name:     "GPP23",
    category: "S2a",
    variant:  "C",
    version:  "-",
    year:     0,
    weight:   5500,
    type: {
      eu: "GPP23",
      lt: "GPP23"
    },
    certificate: [
      {
        name: "European 167/2013",
        number: "e32*167/2013*00021*00"
      },
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name: "no matter",
        locale: "undef"
      },
      {
        name: "Lithuania",
        locale: "lt"
      },
      {
        name: "Latvia",
        locale: "lv"
      },
      {
        name: "Estonia",
        locale: "ee"
      },
      {
        name: "Poland",
        locale: "pl"
      },
      {
        name: "Danmark",
        locale: "dk"
      },
      {
        name: "Russia",
        locale: "ru"
      },
      {
        name: "Serbia",
        locale: "rs"
      },
      {
        name: "Ukraine",
        locale: "ua"
      }
    ]
  },
  spc16:  {
    name: "SPC16",
    category: "R3a",
    variant: "16",
    version: "-",
    year: "XXXX",
    weight: 5800,
    type: {
      eu: "TIP16",
      pl: "SP1/SPC16",
      lt: "SPC16",
      lv: "SPC16",
      dk: "SPC18"
    },
    certificate: [
      {
        name: "European 167/2013",
        number: "e32*167/2013*00015*00"
      },
      {
        name: "pl",
        number: "SP1/SPC16"
      },
      {
        name: "No certification",
        number: ""
      }
    ],
    country: [
      {
        name: "no matter",
        locale: "undef"
      },
      {
        name: "Lithuania",
        locale: "lt"
      },
      {
        name: "Latvia",
        locale: "lv"
      },
      {
        name: "Estonia",
        locale: "ee"
      },
      {
        name: "Poland",
        locale: "pl"
      },
      {
        name: "Danmark",
        locale: "dk"
      },
      {
        name: "Russia",
        locale: "ru"
      },
      {
        name: "Serbia",
        locale: "rs"
      },
      {
        name: "Ukraine",
        locale: "ua"
      }
    ]
  },
  spp14:  {
    name: "SPP14",
    category: "R3a",
    variant: "14P",
    version: "-",
    year: "XXXX",
    weight: 4200,
    type: {
      eu: "SPP",
      pl: "SP1/SPP14",
      lt: "SPP14",
      lv: "SPP14",
      dk: "SPP16"
    },
    certificate: {
      pl: "SP1/SPC14",
      no: ""
    },
    country: [
      {
        name: "no matter",
        locale: "undef"
      },
      {
        name: "Lithuania",
        locale: "lt"
      },
      {
        name: "Latvia",
        locale: "lv"
      },
      {
        name: "Estonia",
        locale: "ee"
      },
      {
        name: "Poland",
        locale: "pl"
      },
      {
        name: "Danmark",
        locale: "dk"
      },
      {
        name: "Russia",
        locale: "ru"
      },
      {
        name: "Serbia",
        locale: "rs"
      },
      {
        name: "Ukraine",
        locale: "ua"
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
  modelName:      "", // according to country!!!
  countryName:    "",
  countryLocale:  "",
  certName:       "",
  certType:       "",
  manufacture:    0,
  numOfTrailers:  0,
  VINcode:        "",
  //
  okVIN:          false,
  okCert:         false,
  // METHODS //
  checkup: function () {
    console.log("Trailer check-up");
    if (this.okVIN && this.okCert) {
      // buildTrailer();
      activateElement("pdfButton");
      console.log("Button activated");
    } else {
      deactivateElement("pdfButton");
      console.log("Button DE-activated");
    }
  }
};

////////// Methods //////////

function buildTrailer (trailerType) {
  console.log("We found a trailer in database.");
  
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
    if ( currentCert.name === "No certification" || currentCert.name === "European 167/2013" || currentCert.name === activator.country.locale) {
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
      vinValid ? reactVIN("validPin") : reactVIN("invalidPin");
      // add VIN to the cookies?
      activator.okVIN = true;
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

//// WORKFLOW ///////
initialize();
domVar.trailerChooser.addEventListener('change', trailerChange);
domVar.countryChooser.addEventListener('change', countryChange);
domVar.certificateChooser.addEventListener('change', certificateChange);
domVar.inputYear.addEventListener('change', yearChange);
domVar.inputPIN.addEventListener('input', VINChange);