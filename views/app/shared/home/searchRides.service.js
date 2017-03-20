(function() {
  'use strict';

  angular
    .module('app')
    .factory('searchRides', searchRides);

  searchRides.$inject = ['$http', '$q'];
  /* @ngInject */
  function searchRides($http, $q) {
    var service = {
      searchRides: searchRides
    };

    return service;
    
    function searchRides(customer, carType) {
      return $http.get('http://localhost:8080/FuberManagementSystem/dashboard/checkRide?mobileNumber='+customer.mobileNumber+'&lat='+customer.lat+'&lng='+customer.lng+'&carType='+carType)
        .then(success)
        .catch(fail);

      function success(response) {
        return response.data;
      }

      function fail(e) {
        return exception.catcher('XHR Failed for getPeople')(e);
      }
    }
    
  }
})();