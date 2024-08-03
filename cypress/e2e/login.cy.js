describe('Login Page', () => {
  it('Verify that the login page is accessible and loads without errors', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="username"]').should('be.visible')
    cy.get('input[name="password"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('Verify that a user with valid login credentials can log in successfully', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="username"]').type('standard_user')
    cy.get('input[name="password"]').type('secret_sauce')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
  })

  it('Verify that a user with invalid login credentials cannot log in and sees an error message', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('input[name="username"]').type('invalid_user')
    cy.get('input[name="password"]').type('invalid_password')
    cy.get('button[type="submit"]').click()
    cy.get('div.error-message-container').should('be.visible')
  })
})