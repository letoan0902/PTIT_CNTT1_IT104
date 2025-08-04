const typeConsole = (string)=>{
    if(string==="log"){
        console.log(`Đây là type: ${string}`);
    }else if(string==="warn"){
        console.warn(`Đây là type: ${string}`)
    }else if(string==="error"){
        console.error(`Đây là type: ${string}`)
    }else {
        console.log(`Đây là type: log`);
    }
}

typeConsole("log")
typeConsole("warn")
typeConsole("error")
typeConsole("")

