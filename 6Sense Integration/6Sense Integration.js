window.optimizely = window.optimizely || [];    // Omit if already instantiating in current project js

// Create your matching custom attributes in Optimizely to match the 6Sense company details attributes
function _6senseIntegration() {
  if (window._storagePopulated) {
    var _6sense = JSON.parse(window.localStorage._6senseCompanyDetails);

    var new_6senseData = Object.keys(_6sense).reduce(function (
      inTransitObj,
      currentKey,
      idx,
      list
    ) {
      var newKey =
        currentKey[0].toUpperCase() + currentKey.slice(1, currentKey.length);
      inTransitObj["_6sense" + newKey] = _6sense[currentKey];
      return inTransitObj;
    },
    {});

    var new_6senseDataCompany = Object.keys(
      new_6senseData["_6senseCompany"]
    ).reduce(function (inTransitObj, currentKey, idx, list) {
      var newKey =
        currentKey[0].toUpperCase() + currentKey.slice(1, currentKey.length);
      inTransitObj["_6sense" + newKey] =
        new_6senseData["_6senseCompany"][currentKey];
      return inTransitObj;
    }, {});

    window.optimizely = window.optimizely || [];
    window["optimizely"].push({
      type: "user",
      attributes: new_6senseDataCompany,
    });
  } else {
    console.log("6sense has not loaded yet");
  }
}
function pollForObject(pollExpTime, pollInterval) {
  var startTime = new Date().getTime();
  var lookForObject = setInterval(function () {
    if (new Date().getTime() - startTime > pollExpTime) {
      clearInterval(lookForObject);
    } else {
      if (window._storagePopulated) {
        _6senseIntegration();
        clearInterval(lookForObject);
        window["optimizely"].push({
          type: "activate",
        });
      }
    }
  }, pollInterval);
}

pollForObject(5000, 50);
