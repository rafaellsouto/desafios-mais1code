let abreviar = (nomeComposto) =>
{
    let primeiroNome = nomeComposto.split(" ");
    let letra;
    let abreviado = "";

    for( let i = 0; i < primeiroNome.length; i++ )
    {
        letra = primeiroNome[i].split("");
        abreviado += letra[0] + '.';
    }

    return abreviado;
}

console.log(abreviar("Otto Octavio"));
console.log(abreviar("Jonas Jones"));
console.log(abreviar("Matt Murdock"));
console.log(abreviar("Bruce Banner"));
console.log(abreviar("Reed Richards"));