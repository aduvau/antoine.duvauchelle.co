<script lang="ts">
	const isItMonday = false;
	const isMyCodeWorking = false;
	const isThereCoffee = false;
	const amIHappyWithMyLife = true;
	const didICodeSomethingMeaningfulToday = true;
	const amIBeingPaidEnough = false;
	const doIHaveAnInternetConnection = false;
	const doIHaveAStashOfSnacks = false;
	const isItAlmostFriday = false;
	const isItWednesday = false;
	const amISeeingFunnyMemes = false;
	const amIStarving = true;
	const amIOnReddit = false;
	const amIInALoop = true;
	const isItSunshineOutside = true;
	const doIHaveABackpack = true;

	const shouldIKeepWritingSoftwareOrLiveInTheWoods = isItMonday
		? isMyCodeWorking && isThereCoffee
			? amIHappyWithMyLife || amIBeingPaidEnough
				? didICodeSomethingMeaningfulToday
					? doIHaveAStashOfSnacks
						? true
						: isItAlmostFriday
							? true
							: false
					: false
				: false
			: false
		: amIStarving || doIHaveAnInternetConnection
			? amIOnReddit
				? isItWednesday
					? amIInALoop
						? amISeeingFunnyMemes
							? true
							: false
						: false
					: false
				: isItSunshineOutside
					? doIHaveABackpack
						? true
						: false
					: false
			: false;

	console.log(shouldIKeepWritingSoftwareOrLiveInTheWoods);
</script>
