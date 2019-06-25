Vue.component('merchant-page', Vue.extend({
	template:
		`<div id="merchantPage">
			<h1>{{name}}</h1>
			<div id="merchantBody">
				<div id="fieldsContainer">
					<div class='group'>
						<div class='groupHeader'>Billing Address</div>
						<form-field v-for="field in myFields" 
							v-bind="field">
						</form-field>
					</div>
					<div class='group'>
						<div class='groupHeader'>Payment Information</div>
						<form-field v-for="field in paymentFields" 
							v-bind="field"
							isPayment=true>
						</form-field>
					</div>
				</div>
				<testing-options></testing-options>
			</div>
		</div>`,

	data: function () {
		return {
			name: 'Jarett\'s Shop',
			myFields: [
				{id: 'first-name', small: true},
				{id: 'last-name', small: true}, 
				{id: 'street-address'}
			],
			paymentFields: [
				{ id: 'card-number'},
				{ id: 'card-expiration'},
				{ id: 'card-cvv'},
				{ id: 'submit'}
			],
		};
	},

	methods: {

	}
}));

Vue.component('form-field', Vue.extend({
	template:
		`<div v-bind:id="'merch-' + id" v-bind:class="{checkoutField: true, small: small}">
			<label>{{getLabel()}}</label>
			<input v-if="!isPayment"></input>
		</div>`,
	props: {
		'id': '',
		'small': {default: false},
		'isPayment': {default: false}
	},

	data: function () {
		return {
		
		};
	},

	methods: {
		getLabel() {
			const label = this.id.replace('-', ' ');
			return (this.id === 'submit') ?  '' : label;
		}
	}
}));