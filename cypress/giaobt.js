Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Kiem tra chuc nang giao bai tap', function () {
    context('Test HL_GBT_46', function () {
        it('??ng nh?p tài kho?n giáo viên', function () {
            const _username = 'namnhatlt@gmail.com'
            const _password = 'godfather2'
            cy.visit('http://hoclieu.sachmem.vn')
            cy.contains('??ng nh?p').click()
            //cy.visit('http://accounts.sachmem.vn/users/sign_in')
            cy.get('[id="user_email"]').type(_username)
            cy.get('[id="user_password"]').type(_password)
            cy.get('[name="commit"]').click()
        })

        it('Ch?n bài t?p và ?n nút giao bài', function () {
            cy.contains('L?p 1').click()
            cy.contains('Bài t?p cu?i tu?n Ti?ng Vi?t 1 T?p 2').click()
            cy.wait(3000)
            cy.get('.pull-right > .btn').click()
        })
        
        it('Ki?m tra nh?p ký t? ??c bi?t t?i tr??ng S? l?n làm l?i khi Giao bài t?p',function(){
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.get(':nth-child(7) > .form-control').type('!@').should('not.have.value','!@')
	})

	it('Ki?m tra nh?p s? âm t?i tr??ng S? l?n làm l?i khi Giao bài t?p',function(){		
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.wait(2000)
            cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('-1')
            cy.contains('T?o').click()
            cy.contains('S? l?n làm l?i ph?i l?n h?n ho?c b?ng 0').should('exist')
	})
     
        it('Ki?m tra nh?p s? th?c vào tr??ng S? l?n làm l?i',function(){
            cy.contains('L?p 4').click()
            cy.contains('Luy?n t?p Ti?ng Anh 4 T?p 1').click()
            cy.wait(2000)
            cy.get('.pull-right > .btn').click()
            cy.wait(2000)
            cy.get('#createAssignmentModal > div > div > form > div.modal-body > div:nth-child(7) > input').type('1.1').should('not.have.value','1.1')
	})
        
        it('Nh?p s? l?n làm l?i quá gi?i h?n', function () {       
            cy.contains('L?p 1').click();
            cy.contains('Bài t?p cu?i tu?n Toán 1 T?p 2').click();
            cy.wait(2000);
            cy.get('.pull-right > .btn').click();
            cy.get(':nth-child(2) > .form-control').clear();
            cy.get(':nth-child(2) > .form-control').type('test s? l?n làm l?i 999');
            cy.get(':nth-child(3) > .ng-select > .ng-select-container > .ng-arrow-wrapper').click();
            cy.get('.ng-option-label').click();
            // ghi s? l?n làm bài là 999
            cy.get(':nth-child(7) > .form-control').type('999');      
            cy.get('form.ng-valid > .modal-footer > .btn-primary').click();

      })
    })
})