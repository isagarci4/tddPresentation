const soma = require('../soma')

describe('Soma', function (){
    it('deve somar os números 3 e 2 e retornar o valor 5', function(){
        expect(soma()).toEqual(5)
    })
})