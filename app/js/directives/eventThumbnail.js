'use strict';

eventsApp.directive('eventThumbnail', function () {
    return {
        retrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/eventThumbnail.html',
        scope: {
            event: "="
        }
    }
});