window.optimizely = window.optimizely || [];    // Omit if already instantiating in current project js

(() => {
    // PJS: Check list of allowed domains - modify this list for your domain(s)
    var allowedOptimizelyDomains = ['firstdomain.com', 'seconddomain.com', 'sub.firstdomain.com'];
    var currentDomain = window.location.hostname;

    // If not in the allowed list, disable Optimizely
    if (!allowedOptimizelyDomains.includes(currentDomain)) {
        window.optimizely.push({
            "type": "disable"
        });
        console.log(`PJS: ${currentDomain} is not an allowed domain. Optimizely Web is disabled.`);
    } else {
        console.log(`PJS: ${currentDomain} is an allowed domain. Optimizely Web is enabled.`);
    }
})();
