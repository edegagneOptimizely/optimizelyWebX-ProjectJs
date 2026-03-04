window.optimizely = window.optimizely || []; // Omit if already instantiating in current project js

(() => {
  // PJS: Configure your disallowed user agents here
  const disallowedUserAgents = new Set(["prerender", "petalbot", "checkly", "meta-externalagent"]);

	// PJS: Disable Opti Web X if request agent is disallowed
  if (isDisallowedAgent()) {   
    window.optimizely.push({
      "type": "disable"
    });
  }

  function isDisallowedAgent() {
    const lowerUserAgent = navigator.userAgent.toLowerCase();
    
    for (const agent of disallowedUserAgents) {
      if (lowerUserAgent.includes(agent)) {
        console.log(`PJS: ${navigator.userAgent} is not an allowed user agent. Optimizely Web will be disabled.`);
        return true;
      }    
    }
    return false;
  }
})();
