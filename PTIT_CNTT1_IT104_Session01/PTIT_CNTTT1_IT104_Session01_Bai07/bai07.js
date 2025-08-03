const reduce = (arr)=>{
    const result = [];
    arr.forEach(a => {
        let sum=0;
        a.forEach(data=>{
            sum+=data;
        })
        result.push(sum);
    });
    console.log(result);   
}

const demo = [[1,2],[6,7,8],[12,8]];
reduce(demo);