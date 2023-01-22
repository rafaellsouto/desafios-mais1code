function compareStrings( firstString, secondString )
{
    if( firstString.endsWith(secondString) )
        return true;
    else 
        return false;
}

console.log(compareStrings( "javascript", "script" ));
console.log(compareStrings( "javascript", "html" ));