## Cookiebot Consent

<img src="../img/opti_logo.png" align="right" alt="Optimizely" width="60" height="60" />

This JavaScript function will check the Cookiebot consent object and verify if consent is given for a specific Cookiebot category.

Cookiebot uses four standard consent categories, exposed via `window.Cookiebot.consent`:

- Necessary Cookies (`necessary`)
- Preferences Cookies (`preferences`)
- Statistics Cookies (`statistics`)
- Marketing Cookies (`marketing`)

Each category returns a boolean value:

- `true` = Consent given  
- `false` = No consent  

To use, make sure the `allowedCategory` value in the function matches the category you place Optimizely Web Experimentation in. By default, this is typically set to `statistics`, but may vary depending on your legal/compliance requirements.

Example:

    const allowedCategory = 'statistics';

If your organization classifies Optimizely under marketing/personalization, you may instead use:

    const allowedCategory = 'marketing';

The script listens for Cookiebot consent events and will dynamically:

- Hold Optimizely events until consent is granted (`holdEvents`)
- Send events once consent is granted (`sendEvents`)
- Optionally disable Optimizely entirely (`disable`)

This ensures Optimizely Web Experimentation respects user consent preferences in real time.
