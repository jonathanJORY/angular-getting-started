describe('template spec', () => {
    beforeEach(() => {
      // Visite de la page d'accueil avant chaque test
      cy.visit('http://localhost:4200');
    });
  
    it('passes', () => {
      cy.get('app-product-list > div').should('have.length', 3);  
    });
  
    it('naviguer vers le panier', () => {
      // Le reste du test reste inchangé
      cy.get('.button.fancy-button').click();
      cy.url().should('include', '/cart');
      cy.contains('Shipping Prices').click();
      cy.url().should('include', '/shipping');
      cy.get('app-shipping > div').should('have.length', 3);
    });
  });
  
  describe('User Flow', () => {
    beforeEach(() => {
      // Visite de la page d'accueil avant chaque test
      cy.visit('http://localhost:4200');
    });
  
    it('should allow the user to purchase the Phone XL', () => {
      // Le reste du test reste inchangé
      cy.contains('Phone XL').should('be.visible').click();
      // verifier l'adresse URL
      cy.url().should('include', '/products/1');


      // Vérifier la visibilité avant d'utiliser le bouton
      cy.get('div > button').should('be.visible').click();
      
      // Cliquer sur le bouton "Checkout"
      cy.get('.button.fancy-button').should('be.visible').click();
      cy.url().should('include', '/cart'); // Vérifier le chemin de l'URL de la page de panier
      cy.get('input').should('be.visible');

      // Fill in the necessary fields
      cy.get('input#name').type('testuser');
      cy.get('form.ng-valid > :nth-child(2) > input#address').type('testpassword');

      // Click on the button to proceed with the purchase
      cy.get('form.ng-valid > .button').should('be.visible').click();
    });
  });
  