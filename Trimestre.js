let trimestre = (month) =>
{
    if( month >= 1 && month <= 3 )
    {
        return `1o trimestre (Janeiro, Fevereiro, Março)`;
    } else if( month >= 4 && month <= 6 )
    {
        return `2o trimestre (Abril, Maio, Junho)`;
    } else if( month >= 7 && month <= 9 )
    {
        return `3o trimestre (Julho, Agosto, Setembro)`;
    } else
    {
        return `4o trimestre (Outubro, Novembro, Dezembro)`;
    }
}

console.log( trimestre( 8 ) );