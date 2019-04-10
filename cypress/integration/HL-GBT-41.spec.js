
describe('Kiểm tra select lớp ', function () {

    context('Đăng nhập', function () {
      beforeEach(function () {
        cy.visit('https://hoclieu.sachmem.vn');
      })
  
      it('Đăng nhập với tư cách là giáo viên', function () {
        cy.contains('Đăng nhập').click();
        cy.get('#user_email').type('ntquang22298@gmail.com'); 
        cy.get('#user_password').type('tanhoi98'); 
        cy.get('#new_user > div:nth-child(6) > input').click();
  
        cy.url().should('include', 'https://hoclieu.sachmem.vn');
        cy.wait(2000);

        cy.contains('Lớp 1').click();

        cy.contains('Bài tập cuối tuần Toán 1 Tập 2').click();
        cy.wait(2000);

        cy.get('.pull-right > .btn').click();

        cy.get(':nth-child(2) > .form-control').clear();

        cy.get(':nth-child(2) > .form-control').type('test chọn lớp');

        cy.get(':nth-child(3) > .ng-select > .ng-select-container > .ng-arrow-wrapper').click();
 
        

  
        // cy.get('#userDropdown > span').should('contain', '(ntquang22298@gmail.com)'); // type user_name
      })
    })
  })
  