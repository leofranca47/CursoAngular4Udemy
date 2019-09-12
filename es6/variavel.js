
//variavel var mesmo estando dentro de uma funçao ou metodo ela pode ser vista no escopo global, 
//já a let só é vista dentor de onde foi declarada
let serie = 'Friends'

if(true){
   let  serie1 = 'The walking'
   console.log(serie1)
}

console.log(serie)