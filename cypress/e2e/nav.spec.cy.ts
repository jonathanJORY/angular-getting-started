import { find } from "cypress/types/lodash";

/*
Exercice 1. Tests de navigation simples
Écrivez et validez les tests suivants dans un scénario unique :
- L’utilisateur charge la page d’accueil
- Il voit apparaître une liste de 3 articles
Lors d’une navigation, on se doit de vérifier le chemin de l’URL pour ne pas risquer une collision avec
une autre page.
Écrivez et validez les tests suivants dans un scénario unique :
- L’utilisateur charge la page d’accueil
- Il appuie sur le bouton « Checkout » pour consulter son panier
o On doit vérifier le chemin de l’URL
- Il appuie sur le lien « Shipping Prices »
o On doit vérifier le chemin de l’URL
- Il voit apparaître une liste de 3 prix */


describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('app-product-list > div').should('have.length', 3);  
  });

  it('naviguer vers le panier', () => {
    // Visiter la page d'accueil
    cy.visit('http://localhost:4200');

    // Cliquer sur le bouton "Checkout"
    cy.get('.button.fancy-button').click();
    cy.url().should('include', '/cart'); // Vérifier le chemin de l'URL de la page de panier

    // Cliquer sur le lien "Shipping Prices"
    cy.contains('Shipping Prices').click();
    cy.url().should('include', '/shipping'); // Vérifier le chemin de l'URL de la page Shipping Prices

    // Vérifier que 3 prix sont affichés
    cy.get('app-shipping > div').should('have.length', 3);
  });
})
