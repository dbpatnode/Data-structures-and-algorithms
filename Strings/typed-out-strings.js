// Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace

// CONSTRAINTS
    // what happens when two #s appear next to each other?
    // what happens to # when there is no characters to to remove?
    // are two empty strings equal to each other?
    // is it case sensitive?

const S1 = ""
const T1 = ""

const S2 = "a"
const T2 = "a"

const S3 = "a#b#"
const T3 = "z#"

const S4 = "abcde"
const T4 = "a#b#c#d#e#abcde"

const S5 = "a##bcd##"
const T5 = "#####b"

const S5 = "A"
const T5 = "a"


const buildString = function(string) {
    const builtString = [];
    for(let p = 0; p < string.length; p++) {
        if(string[p] !== '#') {
            builtString.push(string[p]);
        } else {
            builtString.pop();
        }
    }
    
    return builtString;
}

var backspaceCompare = function(S, T) {
    const finalS = buildString(S);
    const finalT = buildString(T);
    
    if(finalS.length !== finalT.length) {
        return false
    } else {
        for(let p = 0; p < finalS.length; p++) {
            if(finalS[p] !== finalT[p]) {
                return false
            }
        }
    }
    
    return true;
};

console.log(backspaceCompare(string1, string2));