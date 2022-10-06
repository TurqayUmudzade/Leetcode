var equationsPossible = function (equations) {

    let numbers = new Map()
    let preMade = new Map()
    for (let i = 0; i < 26; i++) {
        let letter = String.fromCharCode(i + 97)
        preMade.set(letter, i)
    }

    for (const eq of equations) {
        eq.split("")
        let isEqual = eq[1] === '='
        let x = numbers.get(eq[0])

        if (numbers.has(x)) {
        } else {
            numbers.set(x, preMade.get(x))
        }
        x = numbers.get(x)

        let y = numbers.get(eq[3])
        if (isEqual) {
            if (numbers.has(y) && x !== y) return false
            if (!numbers.has(y)) y = x
        }

        if (isEqual && x != y) {
            return false
        }
    }

    let dsa = 'dsad'
    dsa.rep


    return true
};

let equations = ["b==a", "a==b"]
console.log(equationsPossible(equations));