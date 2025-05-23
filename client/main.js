import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';
// import '/public/service-worker.js'
import '/public/sw.js'

Meteor.startup(() => {
    new App({
        target: document.getElementById('app')
    });

    // Disable console.log in production
    if (Meteor.isProduction) {
        console.log = function () { };
    }

    // serviceWorker.js
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            // navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
            navigator.serviceWorker.register('/sw.js').then(function (registration) {
                // Registration was successful
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
});