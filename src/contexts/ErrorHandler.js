export const handleApiError = (error) => {
	if (!error.response) {
		// Network error (no response from server)
		console.error('Network error:', error.message);
		return { message: 'Network error. Please check your internet connection.' };
	}

	const { status, data } = error.response;

	if (status === 429) {
		// Too Many Requests
		console.error('Too many requests:', data.message || 'Rate limit exceeded.');
		return {
			message: 'You are making too many requests. Please try again later.',
		};
	}

	// Other errors
	console.error('API error:', data.message || error.message);
	return {
		message: data.message || 'An error occurred. Please try again later.',
	};
};
