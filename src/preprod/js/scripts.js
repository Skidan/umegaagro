console.log("Connected");

////////// DOM variables //////////
var category, type, variant, version, year, weight, roadLoad, maxLoad, certificate, pin, country, road, full, drawbar, axle1, axle2, axle3, roadDrawbar, roadAxle1, roadAxle2, roadAxle3, drawbarLoad, axleLoad, b1t1, b1t2, b1t3, b2t1, b2t2, b2t3, b3t1, b3t2, b3t3, b4t1, b4t2, b4t3;
category =    document.getElementById("category");
type =        document.getElementById("type");
variant =     document.getElementById("variant");
version =     document.getElementById("version");
year  =       document.getElementById("year");
weight  =     document.getElementById("weight");
roadLoad  =   document.getElementById("roadLoad");
maxLoad =     document.getElementById("maxLoad");
certificate = document.getElementById("certificate");
pin =         document.getElementById("pin");
country =     document.getElementById("country");
road  =       document.getElementById("road");
full  =       document.getElementById("full");
drawbar =     document.getElementById("drawbar");
axle1 =       document.getElementById("axle1");
axle2 =       document.getElementById("axle2");
axle3 =       document.getElementById("axle3");
roadDrawbar = document.getElementById("roadDrawbar");
roadAxle1 =   document.getElementById("roadAxle1");
roadAxle2 =   document.getElementById("roadAxle2");
roadAxle3 =   document.getElementById("roadAxle3");
drawbarLoad = document.getElementById("drawbarLoad");
axleLoad  =   document.getElementById("axleLoad");
b1t1  =       document.getElementById("b1t1");
b1t2  =       document.getElementById("b1t2");
b1t3  =       document.getElementById("b1t3");
b2t1  =       document.getElementById("b2t1");
b2t2  =       document.getElementById("b2t2");
b2t3  =       document.getElementById("b2t3");
b3t1  =       document.getElementById("b3t1");
b3t2  =       document.getElementById("b3t2");
b3t3  =       document.getElementById("b3t3");
b4t1  =       document.getElementById("b4t1");
b4t2  =       document.getElementById("b4t2");
b4t3  =       document.getElementById("b4t3");

////////// Inputed data ///////////

//////////// Database /////////////
var trailers = {
  spc14:   {
    name: "SPC14",
    category: "R3a",
    variant: "C",
    version: "-",
    year: "XXXX",
    weight: 5500,
    type: {
      eu: "TIP14",
      pl: "SP1/SPC14",
      lt: "SPC14",
      lv: "SPC14",
      dk: "SPC16"
    },
    certificate: {
      eu: "e36*167/2013*00023*00",
      pl: "SP1/SPC14",
      no: ""
    },
    country: [
      "eu", 
      "uni", 
      "lt", 
      "lv", 
      "ee", 
      "pl", 
      "dk", 
      "rs", 
      "bg", 
      "ua", 
      "ru"
    ]
  },
  gpp23:  {
    name: "GPP23",
    category: "S2a",
    variant: "C",
    version: "-",
    year: "XXXX",
    weight: 5500,
    type: {
      eu: "TIP14",
      pl: "SP1/SPC14",
      lt: "SPC14",
      lv: "SPC14",
      dk: "SPC16"
    },
    certificate: {
      eu: "e36*167/2013*00023*00",
      pl: "SP1/SPC14",
      no: ""
    },
    country: [
      "eu", 
      "uni", 
      "lt", 
      "lv", 
      "ee", 
      "pl", 
      "dk", 
      "rs", 
      "bg", 
      "ua", 
      "ru"
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
    certificate: {
      eu: "e36*167/2013*00015*00",
      pl: "SP1/SPC16",
      no: ""
    },
    country: [
      "eu", 
      "uni", 
      "lt", 
      "lv", 
      "ee", 
      "pl", 
      "dk", 
      "rs", 
      "bg", 
      "ua", 
      "ru"
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
      "eu", 
      "uni", 
      "lt", 
      "lv", 
      "ee", 
      "pl", 
      "dk", 
      "rs", 
      "bg"
    ]
  }
};

////////// Methods //////////
function resetData () {
  category.innerText = "-";
  type.innerText = "-";
  variant.innerText = "-";
  version.innerText = "-";
  year.innerText = "-";
  weight.innerText = "-";
  roadLoad.innerText = "-";
  maxLoad.innerText = "-";
  certificate.innerText = "-";
  pin.innerText = "-";
  country.innerText = "-";
  road.innerText = "-";
  full.innerText = "-";
  drawbar.innerText = "-";
  axle1.innerText = "-";
  axle2.innerText = "-";
  axle3.innerText = "-";
  roadDrawbar.innerText = "-";
  roadAxle1.innerText = "-";
  roadAxle2.innerText = "-";
  roadAxle3.innerText = "-";
  drawbarLoad.innerText = "-";
  axleLoad.innerText = "-";
  b1t1.innerText = "-";
  b1t2.innerText = "-";
  b1t3.innerText = "-";
  b2t1.innerText = "-";
  b2t2.innerText = "-";
  b2t3.innerText = "-";
  b3t1.innerText = "-";
  b3t2.innerText = "-";
  b3t3.innerText = "-";
  b4t1.innerText = "-";
  b4t2.innerText = "-";
  b4t3.innerText = "-";
}

function assign (trailerType) {
  if (trailers.hasOwnProperty(trailerType)) {
    console.log("We found a trailer " + trailerType + " in database.");
    var currentTrailer = trailers[trailerType];
    category.innerText = currentTrailer.category;
    type.innerText = currentTrailer.type;
    //variant.innerText = currentTrailer.variant;
    //version.innerText = currentTrailer.version;
    year.innerText = currentTrailer.year;
    weight.innerText = currentTrailer.weight;
    // roadLoad.innerText = currentTrailer.;
    // maxLoad.innerText = currentTrailer.;
    // certificate.innerText = currentTrailer.;
    // pin.innerText = currentTrailer.;
    // country.innerText = currentTrailer.;
    // road.innerText = currentTrailer.;
    // full.innerText = currentTrailer.;
    // drawbar.innerText = currentTrailer.;
    // axle1.innerText = currentTrailer.;
    // axle2.innerText = currentTrailer.;
    // axle3.innerText = currentTrailer.;
    // roadDrawbar.innerText = currentTrailer.;
    // roadAxle1.innerText = currentTrailer.;
    // roadAxle2.innerText = currentTrailer.;
    // roadAxle3.innerText = currentTrailer.;
    // drawbarLoad.innerText = currentTrailer.;
    // axleLoad.innerText = currentTrailer.;
    // b1t1.innerText = currentTrailer.;
    // b1t2.innerText = currentTrailer.;
    // b1t3.innerText = currentTrailer.;
    // b2t1.innerText = currentTrailer.;
    // b2t2.innerText = currentTrailer.;
    // b2t3.innerText = currentTrailer.;
    // b3t1.innerText = currentTrailer.;
    // b3t2.innerText = currentTrailer.;
    // b3t3.innerText = currentTrailer.;
    // b4t1.innerText = currentTrailer.;
    // b4t2.innerText = currentTrailer.;
    // b4t3.innerText = currentTrailer.;
    //console.log(currentTrailer);
  } else {
    console.log("Trailer \"" + trailerType + "\" not found in database.");

  }
}

function initialize () {
  // 1) get trailers list => fill trailer select with options;
  // 2) according to selected trailer, choose a country;
  // 3) according to the country selected in the dropdown, 
  //    get the list of possible certification options for that country;
  // 4) choose the year of production;
  // 5) input the PIN according to the regular expression "/UME[\dA-Z][A-Z]{2}\d{2}[A-Z]{2}\d{7}/g"
  // 6) if OK then activate domPDF generation.
  resetData();
}

//// WORKFLOW ///////
initialize();
assign("spc14");
