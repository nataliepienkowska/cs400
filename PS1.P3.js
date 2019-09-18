//when a function takes in a function, that's a callback!
const funct = (str, lamb) => lamb(str);

let expression1 = funct(str = "supercalifragilisticexpialidocious",
        fragment => fragment.split(/([&c])/g).join("c").split("cc"))

console.log(expression1)

let expression2 = funct(str ="supercalifragilisticexpialidocious",
               word => {
                   let modifiedWord = word.replace(/a/gi, "A");
                   let countOccurrenceOfA = modifiedWord.split(/A/gi).length-1;
                   let lenOfWord = modifiedWord.length;
                   return  {
                       originalString: str,
                       modifiedString: modifiedWord,
                       numberReplaced: countOccurrenceOfA,
                       length: lenOfWord
               };
               }
 )

console.log(expression2)

