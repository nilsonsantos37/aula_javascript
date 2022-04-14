function validaArray(arr, num) {
    try{
      if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

      if (typeof arr !== 'object') 
        throw new TypeError('Array precisa ser do tipo object');

      if (typeof num !== 'number')  
        throw TypeError( 'Num precisa ser do tipo number');

      if(arr. length !== num) throw new RangeError('Tamanho inválido!');

      return arr;   
    } catch (e) {
        if (e instanceof ReferenceError) {
          console.log('Este erro é um ReferenceError!');
          console.log(e.message);
        } else if (e instanceof TypeError) {
          console.log('Este erro é um "TypeError!');
          console.log(e.message);   
        } else if (e instanceof RangeError) {
          console.log('Este erro é um "RangerError!')
          console.log(e.message) 
        } else {
          console.log('Tipo de erro não esperado:' + e);
        }
    }
}
//fazer testes de error usano "console.log(validaArray())" dentro dos aspas() para 1º teste deixar vazil,o terminal imprimira ={Este erro é um ReferenceError!,Envie os parâmetros,undefined} no 
//2ºtexte colocar (5,5) será impresso ={Este erro é um "TypeError!,Array precisa ser do tipo object,undefined}
// 3º texte colocar ([], 'a') será impresso ={Este erro é um "TypeError!,Array precisa ser do tipo object,Num precisa ser do tipo number,undefined} 
//4º texte colocar ([], 5) será impresso ={Este erro é um "RangerError!Tamanho inválido!,,undefined}
//ultimo teste colocar ([1, 2, 3, 4, 5], 5) será impresso =[1, 2, 3, 4, 5]
console.log(validaArray([1, 2, 3, 4, 5], 5));