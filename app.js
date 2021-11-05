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
			return teamsize * workdays * 2 * currentWeek / timeframe;
		}
	}
}

Vue.createApp(Sandbox).mount('#app')