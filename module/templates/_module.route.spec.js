/* jshint -W117, -W030 */
describe('<%= camelModuleName %> routes', function () {
    describe('state', function () {
        var controller;
        var view = 'app/<%= camelModuleName %>/<%= camelModuleName %>.html';

        beforeEach(function() {
            module('app.<%= camelModuleName %>', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        it('should map state <%= camelModuleName %> to url /<%= camelModuleName %> ', function() {
            expect($state.href('<%= camelModuleName %>', {})).to.equal('/<%= camelModuleName %>');
        });

        it('should map /<%= camelModuleName %> route to <%= camelModuleName %> View template', function () {
            expect($state.get('<%= camelModuleName %>').templateUrl).to.equal(view);
        });

        it('of <%= camelModuleName %> should work with $state.go', function () {
            $state.go('<%= camelModuleName %>');
            $rootScope.$apply();
            expect($state.is('<%= camelModuleName %>'));
        });
    });
});
