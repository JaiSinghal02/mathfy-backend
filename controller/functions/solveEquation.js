const solveEquation = function(lhs,comparator,rhs){
    if(comparator==='>') return lhs>rhs
    if(comparator==='<') return lhs<rhs
    if(comparator==='=') return lhs===rhs
}

module.exports = solveEquation