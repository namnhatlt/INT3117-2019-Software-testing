Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Kiem tra chuc nang giao bai tap', function () {
    context('Test HL_GBT_46', function () {
        it('??ng nh?p t�i kho?n gi�o vi�n', function () {
            const _username = 'namnhatlt@gmail.com'
            const _password = 'godfather2'
            cy.visit('http://hoclieu.sachmem.vn')
            cy.contains('??ng nh?p').click()
            //cy.visit('http://accounts.sachmem.vn/users/sign_in')
            cy.get('[id="user_email"]').type(_username)
            cy.get('[id="user_password"]').type(_password)
            cy.get('[name="commit"]').click()
        })

        it('Ch?n b�i t?p v� ?n n�t giao b�i', function () {
            cy.contains('L?p 1').click()
            cy.contains('B�i t?p cu?i tu?n Ti?ng Vi?t 1 T?p 2').click()
            cy.wait(3000)
            cy.get('.pull-right > .btn').click()
        })
        
        it('Ki?m tra nh?p k� t? ??c bi?t t?i tr??ng S? l?n l�m l?i khi Giao b�i t?p',function(){
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.get(':nth-child(7) > .form-control').type('!@').should('not.have.value','!@')
	})

	it('Ki?m tra nh?p s? �m t?i tr??ng S? l?n l�m l?i khi Giao b�i t?p',function(){		
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.wait(2000)
            cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('-1')
            cy.contains('T?o').click()
            cy.contains('S? l?n l�m l?i ph?i l?n h?n ho?c b?ng 0').should('exist')
	})
     
        it('Ki?m tra nh?p s? th?c v�o tr??ng S? l?n l�m l?i',function(){
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.wait(2000)
            cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('1.1').should('not.have.value','1.1')
	})
        
        it('Nh?p s? l?n l�m l?i qu� gi?i h?n', function () {       
            cy.contains('L?p 1').click();
            cy.contains('B�i t?p cu?i tu?n To�n 1 T?p 2').click();
            cy.wait(2000);
            cy.get('.pull-right > .btn').click();
            cy.get(':nth-child(2) > .form-control').clear();
            cy.get(':nth-child(2) > .form-control').type('test s? l?n l�m l?i 999');
            cy.get(':nth-child(3) > .ng-select > .ng-select-container > .ng-arrow-wrapper').click();
            cy.get('.ng-option-label').click();
            // ghi s? l?n l�m b�i l� 999
            cy.get(':nth-child(7) > .form-control').type('999');      
            cy.get('form.ng-valid > .modal-footer > .btn-primary').click();

      })
    })
})