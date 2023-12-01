  
  describe('All', () => {
    beforeEach(() => {
      cy.visit('http://localhost:4200');
      cy.login('correctUser', 'correctPassword');
    });

    it('passes', () => {
        cy.get('app-product-list > div').should('have.length', 3);
      });
    
      it('naviguer vers le panier', () => {
        cy.get('.button.fancy-button').click();
        cy.url().should('include', '/cart');
        cy.contains('Shipping Prices').click();
        cy.url().should('include', '/shipping');
        cy.get('app-shipping > div').should('have.length', 3);
      });
  
    it('should allow the user to purchase the Phone XL', () => {
      cy.contains('Phone XL').should('be.visible').click();
      cy.url().should('include', '/products/1');
  
      cy.get('div > button').should('be.visible').click();
      
      cy.get('.button.fancy-button').should('be.visible').click();
      cy.url().should('include', '/cart');
      cy.get('input').should('be.visible');
  
      cy.get('input#name').type('testuser');
      cy.get('form.ng-valid > :nth-child(2) > input#address').type('testpassword');
  
      cy.get('form.ng-valid > .button').should('be.visible').click();
      cy.logout();
    });
  });
  