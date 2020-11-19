import store from '../../src/store/index.js'

it("it should give me name only", () => {
    expect(store.getters.getFarmerData('get-name')).toEqual("Armstrong")
})
it("it should give me farmers record", () => {
    expect(Array.isArray(store.getters.getFarmerData('get-record'))).toEqual(true)
})
it("it should give me name only", () => {
    expect(store.getters.getFarmerData('get-bio')).toEqual({
        name: "Armstrong Ndukwe",
        email: "arms@gmail.com",
        position: "Worker",
        company: "UAB Farms Inc. Nigeria",
        state: "Nigeria",
        LGA: "Obio/Akpor",
        Links: ['Enugu', 'Lagos State'],
        login: true,
        password: "777yam"
       })
})