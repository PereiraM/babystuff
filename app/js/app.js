'use strict';

/* App Module */

var itemcatApp = angular.module('itemcatApp', [
  'ngRoute',
  'itemcatAnimations',
  'itemcatControllers',
  'itemcatFilters',
  'itemcatServices'
]);

itemcatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/item-list.html',
        controller: 'ItemListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/item-detail.html',
        controller: 'ItemDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
