export const formattedDate = (date: string) => {
	const splittedDate = new Date(date.split('-').reverse().join('-'));

	return new Intl.DateTimeFormat('en-GB', {
		weekday: 'short',
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	}).format(splittedDate);
};
