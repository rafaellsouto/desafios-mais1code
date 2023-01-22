// calcula gorjeta
let gorjeta = ( valor, percentagem ) =>
{
    return valor*(percentagem/100);
}

console.log( gorjeta( 56, 3 ) );