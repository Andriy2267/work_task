describe('Proceed to Checkout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="username"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('button[type="submit"]').click()
    cy.addToCart('Sauce Labs Backpack')
    cy.addToCart('Sauce Labs Bike Light')
  })

  it('Proceed to checkout', () => {
    cy.get('div.shopping_cart_container').click()
    cy.url().should('eq', 'https://www.saucedemo.com/cart.html')
    cy.get('button.checkout_button').click()
    cy.url().should('eq', 'https://www.saucedemo.com/checkout-step-one.html')
  })
})