function* wordGenerator (sentence) {
    eachWord = sentence.split(" ");
    let val1 = 0
    while(true) {
        yield eachWord[val1]
        val1 = val1 + 1
    }
}

let exampleSentence = wordGenerator("All I know is something like a bird within her sang");
let count = 11;
while (count --> 0) {
    console.log(exampleSentence.next().value)
}
