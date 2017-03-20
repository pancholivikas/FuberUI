(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$timeout', 'searchRides', '$q', '$interval', '$state'];
    /* @ngInject */
    function HomeController($timeout, searchRides, $q, $interval, $state) {
        var vm = this;
        vm.isRideBooked = false;
        vm.rideFound = true;
        vm.pinkRides;
        vm.normalRides;
        vm.pinkRidesFound = false;
        vm.normalRidesFound = false;

        vm.customer = {
            name:'Vikas Pancholi',
            lat:12.963049046363762,
            lng:80.245224266052200,
            mobileNumber:'9782177780'
        }

        vm.searchRides = function(carType) {
            searchRides.searchRides(vm.customer, carType).then(function(data) {
                if(carType === 'normal') {
                    if(Array.isArray(data.data)) {
                        vm.normalRidesFound = true;
                        vm.normalRides = data.data;
                    }
                } else {
                    if(Array.isArray(data.data)) {
                        vm.pinkRidesFound = true;
                        vm.pinkRides = data.data;
                    }
                }
                console.log(data);
            })
        }

    }

})();