let contaCarneirinhos  = (quantidade) =>
{
    let contagem = '';
    for( let ind = 0; ind < quantidade; ind++ )
        contagem += `${ind+1} carneirinho...`;
    
    return contagem;
}

console.log(contaCarneirinhos(5));