(function () {
    'use strict';

    angular
        .module('app.<%= camelModuleName %>')
        .controller('<%= capitalModuleName %>Controller', <%= capitalModuleName %>Controller);

    <%= capitalModuleName %>Controller.$inject = ['logger'];
    /* @ngInject */
    function <%= capitalModuleName %>Controller(logger) {
        var vm = this;
        vm.title = '<%= capitalModuleName %>';

        activate();

        function activate() {
            logger.info('Activated <%= capitalModuleName %> View');
        }
    }
})();
