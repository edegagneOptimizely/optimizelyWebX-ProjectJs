window.optimizely = window.optimizely || [];    // Omit if already instantiating in project js

(() => {
	const allowedCategory = 'statistics'; // Change to: 'marketing', 'preferences', or 'statistics'
	const holdEvents = true;             // true = hold/send events, false = disable Web X

	function updateOptimizelyConsent() {
		let pushType = '';

		if (!window.Cookiebot || !window.Cookiebot.consent) {
			console.log('PJS: Cookiebot consent not available yet');
			return;
		}

		const hasConsent = window.Cookiebot.consent[allowedCategory] === true;

		if (!hasConsent) {
			if (holdEvents) {
				pushType = 'holdEvents';
				console.log('PJS: Optimizely holding events by Cookiebot consent');
			} else {
				pushType = 'disable';
				console.log('PJS: Optimizely disabled by Cookiebot consent');
			}
		} else {
			if (holdEvents) {
				pushType = 'sendEvents';
				console.log('PJS: Optimizely sending events by Cookiebot consent');
			} else {
				console.log('PJS: Optimizely enabled by Cookiebot consent');
			}
		}

		if (pushType) {
			window.optimizely.push({
				type: pushType
			});
		}
	}

	// Run when Cookiebot has loaded the visitor's consent state
	window.addEventListener('CookiebotOnConsentReady', updateOptimizelyConsent);

	// Run again if the visitor accepts/updates consent
	window.addEventListener('CookiebotOnAccept', updateOptimizelyConsent);

	// Run again if the visitor declines/withdraws consent
	window.addEventListener('CookiebotOnDecline', updateOptimizelyConsent);

	// Safety check in case Cookiebot is already available before this runs
	updateOptimizelyConsent();
})();
