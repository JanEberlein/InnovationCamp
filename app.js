const Sandbox = {
	data() {
		return {
			teamsize: 1,
			workdays: 5,
			timeframe: 20
		}
	},
	computed: {
		weeklyGoal(currentWeek) {
			return currentWeek;
		}
	}
}

Vue.createApp(Sandbox).mount('#app')