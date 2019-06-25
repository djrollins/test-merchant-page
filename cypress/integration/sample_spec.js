const pageURL = 'http://127.0.0.1:5501/dist/index.html';

describe('Page visit', function() {
    it('Visits the test merchant page', function() {
        cy.visit(pageURL);
    })
});

describe('Vue render', function() {
    it('Finds elements that Vue will render to the page', function() {
        cy.visit(pageURL);
        cy.contains('Testing Options');
        cy.get('.logHeader').click({multiple: true});
        cy.contains('Zoo wee mama');
    })
});