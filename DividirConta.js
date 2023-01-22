// dividir conta
let dividirConta = ( valor, percentagem, pessoas ) =>
{
    let gorjeta = valor*(percentagem/100);
    return (valor + gorjeta) / pessoas;
}

console.log( dividirConta( 56, 3, 2 ) );