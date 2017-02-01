'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function ($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            });

        $routeProvider.when('/sample/cachesample',
            {
                templateUrl: 'templates/Sample/CacheSample.html',
                controller: 'CacheSampleController'
            });
        $routeProvider.when('/sample/compilesample',
            {
                templateUrl: 'templates/Sample/CompileSample.html',
                controller: 'CompileSampleController'
            });
        $routeProvider.when('/sample/cookiestoresample',
            {
                templateUrl: 'templates/Sample/CookieStoreSample.html',
                controller: 'CookieStoreSampleController'
            });
        $routeProvider.when('/sample/filtersample',
            {
                templateUrl: 'templates/Sample/FilterSample.html',
                controller: 'FilterSampleController'
            });
        $routeProvider.when('/sample/localesample',
            {
                templateUrl: 'templates/Sample/LocaleSample.html',
                controller: 'LocaleSampleController'
            });
        $routeProvider.when('/sample/sampledirective',
            {
                templateUrl: 'templates/Sample/SampleDirective.html',
                controller: 'SampleDirectiveController'
            });
        $routeProvider.when('/sample/timeoutsample',
            {
                templateUrl: 'templates/Sample/TimeoutSample.html',
                controller: 'TimeoutSampleController'
            });


        $routeProvider.otherwise({ redirectTo: '/events' });
        $locationProvider.html5Mode(true);
    });