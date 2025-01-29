type DateOptions = {
	weekday: 'short' | 'long' | 'narrow';
	day: '2-digit' | 'numeric' | undefined;
	month: 'short' | 'long' | 'narrow' | '2-digit' | 'numeric' | undefined;
	year: '2-digit' | 'numeric' | undefined;
};

export const formattedDate = (date: string) => {
	const options: DateOptions = {
		weekday: 'long',
		day: '2-digit',
		month: 'short',
		year: 'numeric'
	};

	const preformattedDate = date.split('-').reverse().join('-');

	return new Date(preformattedDate).toLocaleDateString('en-US', options);
};
