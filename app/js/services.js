'use strict';

/* Services */

var itemcatServices = angular.module('itemcatServices', ['ngResource']);

itemcatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('data/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
