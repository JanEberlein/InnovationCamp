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
			return this.teamsize * this.workdays * 2 * currentWeek / this.timeframe;
		}
	}
}

Vue.createApp(Sandbox).mount('#app')