let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let vetor = []

for( let r = 0; r < matriz.length; r++ )
{
    for( let s = 0; s < matriz.length; s++ )
    {
        vetor.push(matriz[r][s])
    }
}

console.log(vetor)