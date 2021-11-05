const Sandbox = {
	data() {
		return {
			teamsize: 1,
			workdays: 5,
			timeframe: 20
		}
	}	
}

Vue.createApp(Sandbox).mount('#app')