// tests
describe('Pizza Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/') // Assumes port 3000 is being used
    })

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
    })
})