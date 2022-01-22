const solveLHS = function(lhs,data){
    let result = data[lhs[0]]
    for(let i=2;i<lhs.length;i+=2){
        let value = data[lhs[i]]
        let operation = lhs[i-1]
        if(operation==='+'){
            result +=value
        }
        else{
            result -=value
        }
    }
    return result
}
module.exports = solveLHS