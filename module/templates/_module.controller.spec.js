/* jshint -W117, -W030 */
describe('<%= capitalModuleName %>Controller', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.<%= camelModuleName %>');
        bard.inject('$controller', '$log', '$rootScope');
    });

    beforeEach(function () {
        controller = $controller('<%= capitalModuleName %>Controller');
        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('<%= capitalModuleName %> controller', function() {
        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of <%= capitalModuleName %>', function() {
                expect(controller.title).to.equal('<%= capitalModuleName %>');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });
        });
    });
});
