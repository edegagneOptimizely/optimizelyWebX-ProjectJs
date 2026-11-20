window.optimizely = window.optimizely || [];    // Omit if already instantiating in current project js

var _6senseDebug = false;

// Create your matching custom attributes in Optimizely to match the 6Sense company details attributes
function _6senseIntegration() {
  if (window._storagePopulated) {
    var company = JSON.parse(window.localStorage._6senseCompanyDetails).company;
    var new_6senseDataCompany = Object.keys(company).reduce(function (inTransitObj, currentKey) {
      var newKey = currentKey[0].toUpperCase() + currentKey.slice(1, currentKey.length);
      inTransitObj["_6sense" + newKey] = company[currentKey];
      return inTransitObj;
    }, {});

    window.optimizely = window.optimizely || [];
    window.optimizely.push({
      type: "user",
      attributes: new_6senseDataCompany,
    });

    if (_6senseDebug === true) {
      console.log("PJS: 6sense company attributes queued:", Object.keys(new_6senseDataCompany));
    }
  } else if (_6senseDebug === true) {
    console.log("PJS: 6sense has not loaded yet");
  }
}

function pollForObject(pollExpTime, pollInterval) {
  var startTime = new Date().getTime();

  if (_6senseDebug === true) {
    console.log("PJS: Waiting for 6sense company data");
  }

  var lookForObject = setInterval(function () {
    if (new Date().getTime() - startTime > pollExpTime) {
      clearInterval(lookForObject);
      if (_6senseDebug === true) {
        console.log("PJS: Timed out waiting for 6sense company data");
      }
    } else {
      if (window._storagePopulated) {
        _6senseIntegration();
        clearInterval(lookForObject);
        window.optimizely.push({
          type: "activate",
        });
        if (_6senseDebug === true) {
          console.log("PJS: Optimizely activation queued by 6sense integration");
        }
      }
    }
  }, pollInterval);
}

pollForObject(5000, 50);
