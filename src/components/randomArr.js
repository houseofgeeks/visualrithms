const randomArr = (size, maxElem) => {
    let arr = [];
    for(let i = 0; i < size; ++i){
        arr.push(Math.floor(Math.random() * maxElem));
    }
    return arr;
}

export default randomArr;