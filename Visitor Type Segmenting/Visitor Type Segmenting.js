window.optimizely = window.optimizely || []; // Omit if already instantiating in current project js

function onActivated(event) {
    // PJS: Collect custom attribute values
    var visitType = window.optimizely.get('visitor').first_session ? 'New' : 'Returning';

    // PJS: Log custom attribute values
    console.log('PJS: Visit Type: ', visitType);

    // PJS: Push custom attributes
    window.optimizely.push({
        "type": "user",
        "attributes": {
            "visitType": visitType
        }
    });
}

window.optimizely.push({
    type: "addListener",
    filter: {
        type: "lifecycle",
        name: "activated"
    },
    handler: onActivated
});