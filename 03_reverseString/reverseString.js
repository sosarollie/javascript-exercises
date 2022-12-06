const reverseString = function(str) {
    let splitStr = str.split("");
    let reverseArray = splitStr.reverse();
    let joinStr= reverseArray.join("");

    return joinStr;
};

// Do not edit below this line
module.exports = reverseString;
