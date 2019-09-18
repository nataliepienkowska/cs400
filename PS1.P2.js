//switch and cases are taken from Professor Donham's Lecture #2 Slide 13
const getLeft = expLeft => {
    let left = Number(expLeft.charAt(0));
    return left;
}
const getRight = expRight => {
    let right = Number(expRight.charAt(2));
    return right;
}

const evaluate = str => {
    let sym = str.charAt(1);
    switch (sym) {
        case '+':
            return (exp) => {
                return getLeft(exp) + getRight(exp);
            }
            break;
        case '-':
            return (exp) => {
                return getLeft(exp) - getRight(exp);
            }
            break;
        case '*':
            return (exp) => {
                return getLeft(exp) * getRight(exp);
            }
            break;
        case '/':
            return (exp) => {
                return getLeft(exp) / getRight(exp);
            }
            break;
        case '%':
            return (exp) => {
                return getLeft(exp) % getRight(exp);
            }
            break;
    }
}

const expression = '4+2';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expression1 = '5*7';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

const expression2 = '6-1';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '9/2';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)

const expression4 = '8%3';
let operator4 = evaluate(expression4);
console.log(`${expression4} = ${operator4(expression4)}`)