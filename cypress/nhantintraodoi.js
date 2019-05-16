Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Ki?m th? nh?n tin trao ??i - Nhóm 100', function () {
  beforeEach('??ng nh?p vào h? th?ng', function () {
    cy.log('Login')
    const _username = 'namnhatlt@gmail.com'
    const _password = 'godfather2'
    cy.visit('http://hoclieu.sachmem.vn')
    cy.contains('??ng nh?p').click()
    cy.get('[id="user_email"]').type(_username)
    cy.get('[id="user_password"]').type(_password)
    cy.get('[name="commit"]').click()
    cy.get('span > .text-dark').click()
    cy.get(':nth-child(2) > :nth-child(1) > .row > .col-9 > .text-dark').click()
    cy.contains('Nh?n tin, trao ??i').click()
  })


  context('Ki?m tra button "G?i"', function () {
    it('HL-NTT?_20 - Ki?m tra hi?n th? c?a Button khi có n?i dung textbox', function () {
      cy.get('textarea').type('Lê Trung Nam Nh?t')
      cy.get('button.btn.btn-primary.pull-right').should('not.be.disabled')
    })
    
    it('HL-NTT?_21 - Ki?m tra hi?n th? c?a Button khi không có n?i dung textbox', function () {
      cy.get('button.btn.btn-primary.pull-right').should('be.disabled')
    })
    
    it ('HL-NTT?_11', () => {
        var chatbox = '.send-message'
        cy.get(chatbox).should('be.exist').should('have.attr', 'placeholder', 'G?i tin nh?n')
    })
    
    it ('HL-NTT?_13', () => {
        var chatbox = '.send-message'
        cy.get(chatbox).should('be.exist').type('12345').should('have.value', '12345')
    })
  })
})

