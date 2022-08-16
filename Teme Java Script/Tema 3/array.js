var dict = {};

function countLetters(multiDimensionArray) {
    handleArray(multiDimensionArray)
}

function handleArray(array) {
    if (array instanceof Array) {
         for (let index = 0; index < array.length; index++) {
            handleArray(array[index])
         } 
    }
    else  hanldeLetter(array);
}

function hanldeLetter(letter){
    if(!letter.toString().match(/[a-zA-Z]/i) ){
        return;
    }

    if(dict[letter] == null){
        dict[letter] = 1;
        return;
    }

    dict[letter] ++;
}

var array = [1, "A", "B", ["C", 2, ["D", 7], "Z"], "A"]
countLetters(array)
console.log(dict)