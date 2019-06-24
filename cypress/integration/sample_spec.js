const pageURL = 'http://127.0.0.1:5501/dist/index.html';

describe('Page visit', function() {
    it('Visits the test merchant page', function() {
        cy.visit(pageURL);
    })
});