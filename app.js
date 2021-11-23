const InnovationCamp = {
	data() {
		return {
			teamsize: 3,
			workdays: 5,
			timeframe: 20
		}
	},
	methods: {
		weeklyGoal(currentWeek) {
			const maxScore = this.teamsize * this.workdays * 2;
			const difficulty = 5 + (4 / -this.timeframe * currentWeek);
			return Math.floor(maxScore / difficulty);
		}
	}
}

Vue.createApp(InnovationCamp).mount('#app')