let paresPrimeiro = (numeros) =>
{
    for( let r = 0; r < numeros.length; r++ )
    {
        let aux
        for( let s = 0; s < numeros.length; s++ )
            if( numeros[r] % 2 == 0 && numeros[s] % 2 != 0)
            {
                aux = numeros[r]
                numeros[r] = numeros[s]
                numeros[s] = aux;
            }
    }
    return numeros
}

let numeros = [1, 2, 3, 4, 5]

console.log(paresPrimeiro(numeros));