//I referenced Slide 24 on Generators for the fib function.
function* fib (x=0) {
    let [val1, val2, result] = [0,1,0]
    while (true) {
        result = val1
        val1 = val1 + val2
        val2 = result
        yield result
    }
}

function* getEven () {
    myFibs = fib()
    while (true) {
        let result1 = myFibs.next().value;
        if (result1 % 2 === 1) {
            myFibs.next().value
        } else {
            yield result1
        }
    }
}

myEvens = getEven()
let count = 6;
while (count --> 0) {
    console.log(myEvens.next().value)
}
