const checkEndString = (string, endString)=>{
    if(string.endsWith(endString)){
        console.log("true");
    }else {
        console.log("false");
    }
}

checkEndString("Hello, World!", "Hello")
checkEndString("Hi there!", "there!")