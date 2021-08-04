// Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace

// CONSTRAINTS
    // what happens when two #s appear next to each other?
    // what happens to # when there is no characters to to remove?
    // are two empty strings equal to each other?
    // is it case sensitive?

const backspaceCompare = function(s,t) {
    let p1 = s.length - 1;
    let p2 = t.length - 1;

    // conditional checking to see if were not on the 0th index
    // aka the beginning of the string.
    while (p1 >= 0 || p2 >= 0) {
            if(s[p1] === '#' || t[p2] === '#') {
                if(s[p1] === '#'){
                    let backCount = 2
                    while(backCount > 0) {    
                        p1 --;
                        backCount --;
                        if(s[p1] === '#') {
                            backCount = backCount + 2
                        }
                    }
                }
            if(t[p2] === '#') {
                let backCount = 2
                while(backCount > 0) { 
                    p2 --;
                    backCount --;
                    if (t[p2] === '#') {
                        backCount = backCount + 2
                    }
                }
            }
            } else {
                if (s[p1]!== t[p2]) {
                    return false
                } else {
                    p1--;
                    p2--;
                }
            }
        }
    return true
}