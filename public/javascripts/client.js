/**
 * Created by dougritzinger on 10/13/15.
 */
var app = angular.module('politicsApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
    $routeProvider
        .when('/about',{
            templateUrl:'/view/about.html',
            controller: 'AboutController'
        })
        .when('/jobs',{
            templateUrl:'/view/jobs.html',
            controller: 'JobsController'
        })
        .when('/rank',{
            templateUrl:'/view/rank.html',
            controller: 'RankController'
        });

    $locationProvider.html5Mode(true);
})