module.exports = function reverse (n) {
    let resultString = String(n).split('').reverse().join('');
    return (!resultString.endsWith('-')) ? Number(resultString) : Number(resultString.slice(0, -1)) ;
}
