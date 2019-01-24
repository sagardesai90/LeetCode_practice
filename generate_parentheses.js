var generateParenthesis = function(n) {
    let result = []
    generate(0, 0, n, '')
    return result
    function generate (left, right, n, item){
        if(left == n && right == n){
            result.push(item)
        }
        if(left < n){
            generate(left +1, right, n, item + '(')
        }
        if(left > right && right < n){
            generate(left, right + 1, n, item + ')')
        }
    }
};