// tests
describe('Pizza Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/') // Assumes port 3000 is being used
    })

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
    })

    // check that all the navigation buttons work and that elements on respective pages are loading
    it('check for navigation and loading', () => {
        homeBtn().click()
        cy.url().should('eq', 'http://localhost:3000/')

        pizzaBtn().click()
        cy.url().should('include', '/pizza')
        nameInput().should('exist')
        sizeSelect().should('exist')
        topping1Box().should('exist')
        topping2Box().should('exist')
        topping3Box().should('exist')
        topping4Box().should('exist')
        specialInput().should('exist')
        submitBtn().should('exist')

        homeBtn().click()
        cartBtn().click()
        cy.url().should('include', '/cart')

        // thorough tedium
        homeBtn().click()
        pizzaBtn().click()
        cartBtn().click()
        cy.url().should('include', '/cart')
        pizzaBtn().click()
        cy.url().should('include', '/pizza')
    })

    it('submit button disabled', () => {
        pizzaBtn().click()
        submitBtn().should('be.disabled')
    })

    it('sample input', () => {
        pizzaBtn().click()
        nameInput()
            .should('have.value', '')
            .type('a')
            .should('have.value', 'a')
        // makes sure error appears
        cy.contains('name must be at least 2 characters').should('exist')
        nameInput()
            .type('b')
            .should('have.value', 'ab')
        cy.contains('name must be at least 2 characters').should('not.exist')
        // submit button should be disabled because no size has been selected yet
        submitBtn().should('be.disabled')

        // selects each size from dropdown once
        sizeSelect()
            .should('have.value', '')
            .select('Small')
            .should('have.value', 'Small')
            .select('Medium')
            .should('have.value', 'Medium')
            .select('Large')
            .should('have.value', 'Large')
            .select('Superior')
            .should('have.value', 'Superior')
        submitBtn().should('not.be.disabled')

        // making sure each checkbox can be checked and unchecked
        topping1Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
        topping2Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
        topping3Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
        topping4Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            .uncheck()
            .should('not.be.checked')
        // making sure more than one checkbox can be checked at the same time
        topping1Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        topping4Box()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        // this doubles as a test to see how submitting a form with toppings selected functions

        // special input able to be typed into
        specialInput()
            .should('have.value', '')
            .type('leave the pizza at the door')
            .should('have.value', 'leave the pizza at the door')

        // submit current order - should reset each input
        submitBtn().click()
        nameInput()
            .should('have.value', '')
        sizeSelect()
            .should('have.value', '')
        topping1Box()
            .should('not.be.checked')
        topping2Box()
            .should('not.be.checked')
        topping3Box()
            .should('not.be.checked')
        topping4Box()
            .should('not.be.checked')
        specialInput()
            .should('have.value', '')

        // navigate to /cart and make sure the order is displayed there
        cartBtn().click()
        cy.contains('leave the pizza at the door').should('exist')

    })
})

const homeBtn = () => cy.get('button[id="home"]')
const pizzaBtn = () => cy.get('button[id="order-pizza"]')
const cartBtn = () => cy.get('button[id="cartBtn"]')
const submitBtn = () => cy.get('button[id="order-button"]')

const nameInput = () => cy.get('input[name=name]')
const sizeSelect = () => cy.get('select[name=size]')
const topping1Box = () => cy.get('input[name=topping1]')
const topping2Box = () => cy.get('input[name=topping2]')
const topping3Box = () => cy.get('input[name=topping3]')
const topping4Box = () => cy.get('input[name=topping4]')
const specialInput = () => cy.get('input[name=special]')