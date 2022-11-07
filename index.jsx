const{soma} = require("./index")
test("deveria retornar a soma dos valores", () => {
    expect(soma(2, 2)).toBe(4)
    expect(soma(10, 10)).toBe(20)
})