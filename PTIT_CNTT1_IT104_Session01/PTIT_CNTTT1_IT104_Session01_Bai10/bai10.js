const gopMang = (arr)=>{
    const group = {};
    for(let a of arr){
        const key = a.split('').sort().join('');

        if(!group[key]){
            group[key]=[];
        }

        group[key].push(a);
    }
    console.log(Object.values(group));
    
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
gopMang(input);