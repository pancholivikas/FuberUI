(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$timeout', 'sortkeys', '$q', '$interval', '$state'];
    /* @ngInject */
    function HomeController($timeout, sortkeys, $q, $interval, $state) {
        var vm = this;
        vm.isRideBooked = false;
        vm.rideFound = true;

        
        vm.customer = {
            name:'Customer-A',
            lat:12.0002,
            lng:15.00598
        }


        vm.rideSuggestions = [
            {
                name:'Driver-A',
                lat:12.012,
                lng:15.02,
                carType:'Normal'
            },
            {
                name:'Driver-A',
                lat:12.012,
                lng:15.02,
                carType:'Normal'
            },
            {
                name:'Driver-A',
                lat:12.012,
                lng:15.02,
                carType:'pink'
            },
            {
                name:'Driver-A',
                lat:12.012,
                lng:15.02,
                carType:'Normal'
            },
            {
                name:'Driver-A',
                lat:12.012,
                lng:15.02,
                carType:'pink'
            },
        ]

    }

})();