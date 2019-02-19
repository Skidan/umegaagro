Vue.component('trailers', {
  props: ['tip'],
  template: '<option>{{ tip.name }}</option>'
})

var trailerData = new Vue({
	el: "#wrapper",
	data: {
		trailerTypes: [
			{id: 0, name: "-select-"},
			{id: 1, name: "SPC14"},
			{id: 2, name: "SPC16"},
			{id: 3, name: "GPP23"},
			{id: 4, name: "GPP27"},
			{id: 5, name: "PI20"},
			{id: 6, name: "SPC30"},
			{id: 7, name: "SPE16"}
		],
		//variables
	},
	methods: {
		//methods
	},
	computed: {
		//computed methods
	}
});