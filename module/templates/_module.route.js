(function() {
    'use strict';

    angular
        .module('app.<%= camelModuleName %>')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: '<%= camelModuleName %>',
                config: {
                    url: '/<%= camelModuleName %>',
                    templateUrl: 'app/<%= camelModuleName %>/<%= camelModuleName %>.html',
                    controller: '<%= capitalModuleName %>Controller',
                    controllerAs: 'vm',
                    title: '<%= capitalModuleName %>',
                    settings: {
                        nav: 2,
                        content: '<i class="fa fa-lock"></i> <%= capitalModuleName %>'
                    }
                }
            }
        ];
    }
})();
