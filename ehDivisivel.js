function ehDivisivel(x, y, z)
{
    if( x % y == 0 && x % z == 0 )
        return true
    else
        return false
}

console.log(ehDivisivel(1, 2, 3));
console.log(ehDivisivel(8, 2, 4));
console.log(ehDivisivel(100, 1, 10));
console.log(ehDivisivel(45, 77, 1));