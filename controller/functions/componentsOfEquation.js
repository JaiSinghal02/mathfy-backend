const componentsOfEquation = function(equation,data){
    let positionOfComparator = equation.search('>|<|=')
    let lhs = equation.slice(0,positionOfComparator)
    let comparator = equation[positionOfComparator]
    let rhs = parseInt(equation.slice(positionOfComparator+1))
    if(Number.isNaN(rhs)){
        rhs = data[equation.slice(positionOfComparator+1)]
    }
    return {lhs,comparator,rhs}
}

module.exports = componentsOfEquation