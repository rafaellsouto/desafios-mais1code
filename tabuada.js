let tabuada = () =>
{
    for( let linha = 1; linha <= 10; linha++ )
    {
        console.log(`Tabuada do ${linha}`);
        for( let coluna = 1; coluna <= 10; coluna++ )
        {
            console.log(`${linha} x ${coluna} = ${linha * coluna}`);
        }
        console.log();
    }
}

tabuada();