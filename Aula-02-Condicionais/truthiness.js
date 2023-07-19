/*Os seguintes valores são considerados "falsy" em JavaScript:

> false: O valor Booleano falso.
> 0: O número zero.
> '' (string vazia): Uma string sem caracteres.
> null: Representa a ausência de um valor.
> undefined: Representa um valor indefinido.
> NaN: Representa um valor inválido do tipo "number". */

const x = 10

if(x){
  console.log('O x é truthy');
} else {
  console.log('O x é falsy');
}