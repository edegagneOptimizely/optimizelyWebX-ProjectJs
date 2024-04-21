window.optimizely = window.optimizely || [];    // Omit if already instantiating in current project js.

// PJS: Custom scrolling events
let hasFiredScroll25Event = false;
let hasFiredScroll50Event = false;
let hasFiredScroll75Event = false;
let hasFiredScroll100Event = false;

// PJS: Scroll handler function.
function handleScroll() {
    // DOM queries
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;
    // Calculate scroll percentage
    const scrollPercent = (window.scrollY / (bodyHeight - windowHeight)) * 100;

    // Fire events based on scrollPercentage.
    // NOTE: Modify these for your own scroll percentages/events.
    switch (true) {
        case (!hasFiredScroll25Event && scrollPercent >= 25):
            sendScrollEvent('scroll25');
            hasFiredScroll25Event = true;
            break;
        case (!hasFiredScroll50Event && scrollPercent >= 50):
            sendScrollEvent('scroll50');
            hasFiredScroll50Event = true;
            break;
        case (!hasFiredScroll75Event && scrollPercent >= 75):
            sendScrollEvent('scroll75');
            hasFiredScroll75Event = true;
            break;
        case (!hasFiredScroll100Event && scrollPercent >= 100):
            sendScrollEvent('scroll100');
            hasFiredScroll100Event = true;
            break;
        default:
            // Handle the default case if needed
            break;
    }
}

// PJS: Send scroll event function
function sendScrollEvent(eventName) {
    window.optimizely.push({
        type: 'event',
        eventName: eventName
    });
}

// PJS: Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

// PJS: Attach the debounced scroll handler
const debounceDelay = 50; // Adjust the delay as needed
const debouncedScrollHandler = debounce(handleScroll, debounceDelay);

// PJS: Add the debounced scroll event listener
window.addEventListener('scroll', debouncedScrollHandler);

// PJS: Add the scroll event listener without debouncing
//window.addEventListener('scroll', handleScroll);
