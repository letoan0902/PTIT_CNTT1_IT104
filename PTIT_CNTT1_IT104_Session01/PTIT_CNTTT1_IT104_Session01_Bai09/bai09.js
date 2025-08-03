const gopMang = (a,b)=>{
    const arr = [...a,...b];
    arr.sort();
    console.log(arr);
}

gopMang([1, 2, 3, 5, 9], [4, 6, 7, 8])