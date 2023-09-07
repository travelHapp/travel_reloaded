describe('example to-do app', () => {

    beforeEach(() => {


        cy.visit('http://localhost:3000/')
    })
    it('si se puede loguear', () => {


        cy.get('.registerIcon').click()
        cy.visit('http://localhost:3000/register')
        cy.wait(2000)


    
        cy.get('.acces').click()
        cy.visit('http://localhost:3000/login')
        cy.wait(2000)

        let email= 'lorena@gmail.com'
        let password='123456'

        cy.get('input[name=email]').type(email)
        cy.wait(1000)

        cy.get('input[name=password]').type(`${password}{enter}`)
        cy.wait(1000)


        cy.get('.accept-button').click()
        cy.wait(1000)
        cy.url().should('include','http://localhost:3000/')
       
        
    })


});