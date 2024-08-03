describe('Checkout: Your Information', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="username"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('button[type="submit"]').click()
    cy.addToCart('Sauce Labs Backpack')
    cy.addToCart('Sauce Labs Bike Light')
    cy.get('div.shopping_cart_container').click()})})