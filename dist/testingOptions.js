Vue.component('testing-options', Vue.extend({

	template:
		`<div id="testingOptions">
			<h1>Testing Options</h1>
			<p>
				Transaction type:
				<select v-model="currentTransaction" @change="changeTransaction" id="transactionType">
					<option v-for="type in transactionTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				Environment:
				<select v-model="currentEnv" @change="changeEnv" id="envType">
					<option v-for="type in envTypes" v-bind:value="type">{{type}}</option>
				</select>
			</p>
			<p>
				API Key:
				<input v-model="apiKey" @input="changeApiKey">
			</p>
			<testing-log v-bind:logType="'Submission Log'"></testing-log>
			<testing-log v-bind:logType="'Response Log'"></testing-log>
		</div>`,

	data: function () {
		return {
			transactionTypes: ['Credit Card', 'ZooWeeMama'],
			envTypes: ['Production', 'Dev1', 'Dev2'],
			currentEnv: 'Production',
			currentTransaction: 'Credit Card',
			apiKey: 'sdlkfjsldf'
		};
	},

	methods: {
		changeEnv() {
			console.log('Changing environment type');
		},

		changeTransaction() {
			console.log('Changing transaction type');
		},

		changeApiKey() {
			GlobalPayments.configure({
				publicApiKey: this.apiKey
			});
		}
	}
}));

Vue.component('testing-log', Vue.extend({
	template:
		`<div class="testingLog">
			<div class="logHeader" 
				v-bind:class="{collapsed : collapsed}"
				@click="collapsed = !collapsed">
				{{logType}}
			</div>
			<div class="logContainer">
				<div class="logText">
					{{logString}}
				</div>
			</div>
		</div>`,
	props: ['logType'],
	data: function () {
		return {
			logString: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			collapsed: true,
		};
	},

	methods: {}
}));
