// Check OneTrust for consent to run Optimizely Web X
function optiOneTrustCheck() {
	const allowedGroup = 'C0003';		// Change this to the category used for Optimizely consent
	const cookieName = 'OptanonConsent';
	const cookies = document.cookie.split(';');
	let cookieValue = '';
	
	// Get cookie value
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim();
		if (cookie.startsWith(cookieName + '=')) {
			cookieValue = cookie.substring(cookieName.length + 1);
			break;
		}
	}

	const decodedcookieValue = decodeURIComponent(cookieValue);
	const keyValuePairs = decodedcookieValue.split('&');
	let consentGroups = null;
	
	// Extract consent groups from cookie value
	for (let i = 0; i < keyValuePairs.length; i++) {
		const pair = keyValuePairs[i].split('=');
		const key = pair[0];
		const value = pair[1];

		if (key === 'groups') {
			consentGroups = value.split(',');
			break;
		}
	}

	// Check for consent
	if (!consentGroups.indexOf(allowedGroup + ':1')) {
		//console.log('Optimizely disabled by consent');
		
		window.optimizely = window.optimizely || [];
		window["optimizely"].push({
			"type": "disable"
		});		
	} else {
		//console.log('Optimizely enabled by consent');
	}
}

// Usage
optiOneTrustCheck();
