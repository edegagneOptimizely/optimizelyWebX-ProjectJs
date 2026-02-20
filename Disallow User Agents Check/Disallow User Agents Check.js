window.optimizely = window.optimizely || []; // Omit if already instantiating in current project js

(() => {
  // PJS: Configure your disallowed user agents
  const optiDisallowedAgents = ["Prerender", "PetalBot", "Checkly", "DatadogSynthetics"];

	// PJS: Disable Opti Web X if request agent is disallowed
  if (isDisallowedAgent()) {   
    window.optimizely.push({
      "type": "disable"
    });
  }

  function isDisallowedAgent() {
    
    var result = false;
    var lowerUserAgent = navigator.userAgent.toLowerCase();  
    for (var i = 0; i < optiDisallowedAgents.length; i++) {
      if (lowerUserAgent.includes(optiDisallowedAgents[i].toLowerCase())) {
        // User agent is in the list
        console.log(`PJS: ${navigator.userAgent} is not an allowed user agent. Optimizely Web will be disabled.`);
        result = true;
        break;
      }    
    }
    return result;
  }
})();
