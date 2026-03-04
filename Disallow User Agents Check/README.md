# Disallow User Agents Check

<img src="../img/opti_logo.png" align="right" alt="Optimizely" width="60" height="60" />

JavaScript to check against a list of disallowed user agents. If the current user agent matches any in the list, Optimizely Web will be disabled.

## Features

- **Case-insensitive matching**: User agents are checked without regard to capitalization
- **Optimized performance**: Uses Set data structure for efficient lookups
- **Early exit**: Stops checking once a match is found
- **Configurable**: Easy to add or remove user agents from the disallowed list

## Usage

Add disallowed user agents to the `disallowedUserAgents` Set in lowercase:

```javascript
const disallowedUserAgents = new Set(["prerender", "petalbot", "checkly", "meta-externalagent"]);
```

Common bot user agents to disallow:

- **Prerender**: Prerendering services
- **PetalBot**: Aspark's web crawler
- **Checkly**: Monitoring service
- **meta-externalagent**: Meta's external agent

## How It Works

1. Checks if the current browser's user agent contains any of the disallowed strings
2. If a match is found, disables Optimizely Web and logs a message to the console
3. Otherwise, Optimizely Web runs normally
