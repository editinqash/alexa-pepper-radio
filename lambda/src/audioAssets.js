'use strict';

let en = {
    card : {
        title: 'BounceFM',
        subtitle: 'Internet radio, evolved.',
        cardContent: "Head over to our website: https://play.voltcorp.uk",
        image: {
            largeImageUrl: 'https://i.ibb.co/y0tjtzW/7680-4320-gradient-blur-4k-wallapapers-v0-uvioxbv51tbb1.png',
            smallImageUrl: 'https://i.ibb.co/y0tjtzW/7680-4320-gradient-blur-4k-wallapapers-v0-uvioxbv51tbb1.png'
        }
    },
    url: 'https://radio.voltcorp.co.uk/public/bouncefm/playlist.m3u',
    startJingle: 'https://us-east-1.telnyxcloudstorage.com/voltassets/Bounce%202021%20-%20Keep%20Bouncing.mp3?X-AMZ-Security-Token=eyJhbGciOiJFZDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJ0ZWxueXhfY2xpZW50X3Rva2VuIiwiZXhwIjoxNzE1MzY2ODA5LCJncmFudHMiOlt7ImFjdGlvbnMiOlsiR2V0T2JqZWN0Il0sInJlc291cmNlcyI6WyJ2b2x0YXNzZXRzL0JvdW5jZSAyMDIxIC0gS2VlcCBCb3VuY2luZy5tcDMiXSwic3ViamVjdHMiOlsidGVsbnl4OnVzZXJzOjQ1ZDkyNDk4LTI4NGUtNDJiOS1iZmI4LWE0YjcyNzdiMDkwMSJdfV0sImdyYW50c192ZXJzaW9uIjoiMS4wLjAiLCJpYXQiOjE3MTQ3NjIwMDksImlzcyI6InRlbG55eF9jbGllbnRfdG9rZW4iLCJqdGkiOiI3YmY3NzhlZC1iYjc0LTQzYjYtYmY4Yy05MWNlNTNlZWZmNTYiLCJuYmYiOjE3MTQ3NjIwMDgsInN1YiI6Im51bGwiLCJ0eXAiOiJhY2Nlc3MifQ.pSUtLoBcZ__XQsEb3WDJ9s1tJWAced9QImhTQFmealHT3XJV8jbO7wVUDCl54kgahVGmFt1_peIZafG0wwTICQ',
};

let globalAudioData = {
    'en-US': en,
    'en-GB': en
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) { 
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];    
}

module.exports = audioData;
