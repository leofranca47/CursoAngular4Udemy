var dobroValor = function(numero){
    return numero * 2
}

console.log(dobroValor(8))

//só usa parenteses em arrow functions quando não tem nenhum parametro ou quando tem mais de um
var dobroValor1 = numero => numero * 2
console.log(dobroValor1(7))