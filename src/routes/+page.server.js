export const load = async ({ fetch }) => {
	try {
		const response = await fetch('http://localhost:4000/events');
		if (!response.ok) throw new Error('Failed to fetch events');
		const events = await response.json();
		return { events };
	} catch (error) {
		console.error('Error fetching data:', error);
		return { events: [] }; // Return empty data if there's an error
	}
};
