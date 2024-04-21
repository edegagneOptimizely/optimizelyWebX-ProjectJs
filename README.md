# optimizely-ProjectJs
Useful javascript functions to use in Optimizley Web Experimentation ProjectJs.

## PJS-One Trust Consent
This javascript function will check the One Trust OptanonConsent cookie and verify if consent is given for a specific OneTrust group.

By default, the group/category structure is 'C0001:1, C0002:1, C0003:1, C0004:1'. The value after the semi-colon indicates whether consent is given or not for that group/category. 0 = No consent, 1 = Consented

- Strictly Necessary Cookies (C0001)
- Performance Cookies (C0002)
- Functional Cookies (C0003)
- Targeting Cookies (C0004)

To use, make sure the 'allowedGroup' value in the function matches the category you place Optimizely Web X in. By default, this is set to group C0003.

## PJS-Scrolling Metrics
These javascript functions will check scroll depth and raise an Optimizely custom event for specified scoll depths.

Place the javascript in project js. Then create the following four (4) custom events:
- Scroll 25 (scroll25)
- Scroll 50 (scroll50)
- Scroll 50 (scroll75)
- Scroll 50 (scroll100)

These events will now be availably globally to use as instrumentation metrics in your campaigns/experiments.

## PJS-Session Count Tracking
This javascript function will track session count as an Optimizely custom event.

This event will now be availably globally to use as an instrumentation metric in your campaigns/experiments.
