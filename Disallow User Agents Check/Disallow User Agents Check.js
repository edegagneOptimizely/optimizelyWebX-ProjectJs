window.optimizely = window.optimizely || []; // Omit if already instantiating in current project js

(() => {
  // PJS: Configure your disallowed user agents here
  const optlyUserAgentList = ["Prerender", "PetalBot", "Checkly"];

  if (isUserAgentBot()) {   
    window.optimizely.push({
      "type": "disable"
    });
  }

  function isUserAgentBot() {
    
    var result = false;
    var lowerUserAgent = navigator.userAgent.toLowerCase();  
    for (var i = 0; i < optlyUserAgentList.length; i++) {
      if (lowerUserAgent.includes(optlyUserAgentList[i].toLowerCase())) {
        // User agent is in the list
        console.log(`PJS: ${navigator.userAgent} is not an allowed user agent. Optimizely Web will be disabled.`);
        result = true;
        break;
      }    
    }
    return result;
  }
})();
