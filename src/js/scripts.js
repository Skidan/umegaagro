Vue.component('trailers', {
  props: ['tip'],
  template: '<option>{{ tip.name }}</option>'
})

var trailerData = new Vue({
	el: "#wrapper",
	data: {
		//variables
		trailerTypes: [
			{id: 0, name: "- select type -"},
			{id: 1, name: "SPC14"},
			{id: 2, name: "SPC16"},
			{id: 3, name: "GPP23"},
			{id: 4, name: "GPP27"},
			{id: 5, name: "PI20"},
			{id: 6, name: "SPC30"},
			{id: 7, name: "SPE16"}
		],
		// database with trailers
		trailerDatabase: [
			{umegaTrailerType: "SPC14"},
			{category: "R3a"},
			{tradeName: "SPC14"},
			{version: "-"},
			{certName: "TIP14"},
			{certVersion: "C"},
			{sertificated: true},
			{homologation: "e32*167/2013*00024*00"},
			{weight: 4100},
			{techPayload: 14000},
			{drawbar: 3000},
			{axle: 9000}
		],
		currentTrailer: [
			{name: "XXXXX"},
			{category: "XXX"},
			{variant: "XXX"},
			{version: "-"},
			{year: "0000"},
			{mass: 1234},
			{payload: 12345},
			{techPayload: 123456},
			{homologation: "e32*167/2013*00000*00"},
			{vin: "UMEXXX00XX0000000"},
			{country: "XX"},
			{onroad: [
				{whole: 23123},
				{p0: 3000},
				{p1: 10000},
				{p2: 10000},
				{p3: 10000}
			]},
			{offroad: [
				{whole: 53123},
				{p0: 4000},
				{p1: 14000},
				{p2: 14000},
				{p3: 14000}
			]},
			{secondTrailer: [
				{t1b1: 1500},
				{t1b2: 8000},
				{t1b3: 18000},
				{t1b4: 18000}
			]}
		]
		
	},
	methods: {
		fillTrailer(){
			// fill "currenttrailer" with selected info
			alert("Trailer filled");
		}
	}
});