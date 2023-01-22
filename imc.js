let imc = ( peso, altura ) =>
{
    return peso / (altura * altura);
}

console.log( imc( 72, 1.70 ).toFixed(2) );