
function mergeObjects<T, U>(a:T,b:U):T&U{
    return {...a,...b};
}

const user={id: 1, name: "Toan"}
const job ={title: "Dev", company:"Rikkei"}

const result = mergeObjects(user,job);
console.log(result);
