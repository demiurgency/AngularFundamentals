'use strict';

eventsApp.directive('voting', function () {
    return {
        retrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/voting.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});