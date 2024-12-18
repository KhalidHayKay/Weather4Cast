export function handleError(error) {
	let errorMessage;

	switch (error.code) {
		case error.PERMISSION_DENIED:
			errorMessage = 'User denied the request for Geolocation.';
			break;
		case error.POSITION_UNAVAILABLE:
			errorMessage = 'Location information is unavailable.';
			break;
		case error.TIMEOUT:
			errorMessage = 'The request to get user location timed out.';
			break;
		case error.UNKNOWN_ERROR:
			errorMessage = 'An unknown error occurred.';
			break;
		default:
			errorMessage = 'Unable to retrieve your location';
	}

	alert(errorMessage);
}
