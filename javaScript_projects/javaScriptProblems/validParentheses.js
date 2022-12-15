// Valid Parentheses problem

function validParentheses(checkValidParentheses){
    let result = [];
    
    for (let i = 0; i < checkValidParentheses.length; i++) {
        if(checkValidParentheses[i] === "(" || checkValidParentheses[i] === "[" || checkValidParentheses[i] === "{"){
            result.push(checkValidParentheses[i]);
        }
        else{
            let fakeTop = result.length - 1;

            if(
                 checkValidParentheses[i] === ")" && result[fakeTop] === "(" ||
                 checkValidParentheses[i] === "]" && result[fakeTop] === "[" ||
                 checkValidParentheses[i] === "}" && result[fakeTop] === "{"
            ){
                result.pop();
            }
            else{
                return false;
            }
        }
        
    }

    if(result.length === 0){
        return true;
    }

    return false;
}

console.log(validParentheses("()"));
console.log(validParentheses("([)"));
