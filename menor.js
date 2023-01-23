function menor( valor )
{
    let menor = valor[0];
    for( i = 0; i < valor.length; i++ )
    {
        if( valor[i] < menor )
        {
            menor = valor[i];
        }
    }
    return menor;
}

console.log(menor([7, 32, 2, 0]));