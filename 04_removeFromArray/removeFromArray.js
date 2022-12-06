const removeFromArray = function(array, ...args) {
    const times = args.length;
    for (let i = 0; i < times; i++){
        const index = array.indexOf(args[i]);
        if (index > -1) {
            array.splice(index,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
