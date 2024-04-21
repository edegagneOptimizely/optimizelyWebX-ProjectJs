## PJS-One Trust Consent Tracking
This javascript function will check the One Trust OptanonConsent cookie and verify if consent is given for a specific OneTrust group.

By default, the group/category structure is 'C0001:1, C0002:1, C0003:1, C0004:1'. The value after the semi-colon indicates whether consent is given or not for that group/category. 0 = No consent, 1 = Consented

- Strictly Necessary Cookies (C0001)
- Performance Cookies (C0002)
- Functional Cookies (C0003)
- Targeting Cookies (C0004)

To use, make sure the 'allowedGroup' value in the function matches the category you place Optimizely Web X in. By default, this is set to group C0003.
