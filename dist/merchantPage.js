Vue.component('merchant-page', Vue.extend({
	template:
		`<div id="merchantPage">
			<h1>{{name}}</h1>
			<div id="merchantBody">
				<div id="fieldsContainer">
					<div v-for="field in fields" v-bind:id="'merch-'+field.id" class="paymentField">
						<label>{{field.label}}</label>
					</div>
				</div>
				<testing-options></testing-options>
			</div>
		</div>`,

	data: function () {
		return {
			name: 'Jarett\'s Shop',
			fields: [
				{ id: 'card-holder', label: 'Card Holder' },
				{ id: 'card-number', label: 'Card Number' },
				{ id: 'card-expiration', label: 'Card Expiration' },
				{ id: 'card-cvv', label: 'Card CVV' },
				{ id: 'zip', label: 'Zip' },
				{ id: 'submit', label: '' }
			],
		};
	},

	methods: {

	}
}));