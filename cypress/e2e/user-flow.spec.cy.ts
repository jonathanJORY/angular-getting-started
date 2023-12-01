  /*

  Exercice 2. Tests de flux utilisateur
  Lors d’un test E2E sur un use-case nécessitant le remplissage de champs et le clic sur des boutons, il
  faut faire attention à :
  - Empêcher les collisions de test (vérification du chemin d’URL)
  - Vérifier la visibilité des éléments (button, a, input, etc) avant leur utilisation
  Dans une nouvelle spec user-flow :
  Écrivez et validez le scénario suivant :
  - L’utilisateur achète l’article Phone XL */


  describe('User Flow', () => {
    it('should allow the user to purchase the Phone XL', () => {
      cy.visit('http://localhost:4200');

      cy.contains('Phone XL').should('be.visible').click();
      // verifier l'adresse URL
      cy.url().should('include', '/products/1');


      // Vérifier la visibilité avant d'utiliser le bouton
      cy.get('div > button').should('be.visible').click();
      
      cy.get('.button.fancy-button').should('be.visible').click();
      cy.url().should('include', '/cart'); // Vérifier le chemin de l'URL de la page de panier
      cy.get('input').should('be.visible');

      cy.get('input#name').type('testuser');
      cy.get('form.ng-valid > :nth-child(2) > input#address').type('testpassword');

      cy.get('form.ng-valid > .button').should('be.visible').click();

    });
  });
