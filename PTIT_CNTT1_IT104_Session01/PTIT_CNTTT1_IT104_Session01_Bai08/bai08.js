const chen = (a,b,c)=>{
    if(c>a.length){
        console.log("Index khong hop le");
    } else {
        const arr=[];
        a.forEach((el,index) => {
            if(index==c){
                arr.push(...b);
                arr.push(el);
            }else {
                arr.push(el);
            }
        });
        console.log(arr);
        
    }
}

chen(['a', 'b', 'e', 'f'], ['c','d'], 2);