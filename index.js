// Your code here
function mapToNegativize(sourceArray){
    let memo =[];
    for (let i = 0; i < sourceArray.length; i++){
        memo.push(-1 * sourceArray[i]);
        }
        return memo;
};

function mapToNoChange(sourceArray){
    let memo =[];
    for (let i = 0; i < sourceArray.length; i++){
        memo.push(sourceArray[i]);
        }
        return memo;
};

function mapToDouble(sourceArray){
    let memo =[];
    for (let i = 0; i < sourceArray.length; i++){
        memo.push( 2 * sourceArray[i]);
        }
        return memo;
};

function mapToSquare(sourceArray){
    let memo =[];
    for (let i = 0; i < sourceArray.length; i++){
        memo.push(sourceArray[i] ** 2);
        }
        return memo;
};

function reduceToTotal(sourceArray, startingPoint=0){
    let total = startingPoint;
    for (let i = 0; i < sourceArray.length;i++){
        total += sourceArray[i];
    };
return total; 
};

function reduceToAllTrue(sourceArray){
    for (let i = 0; i < sourceArray.length; i++){
    if (!sourceArray[i])
    return false
};
return true;
};

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i])
            return true
    };
    return false;
};