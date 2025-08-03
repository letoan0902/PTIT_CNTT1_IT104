const string = [
    {
        id: 1,
        name: "Lê Toàn"
    },
    {
        id: 2,
        name: "Nguyễn Nhung"
    },
    {
        id: 3,
        name: "Lê An"
    }
]

string.forEach(element => {
    console.log(`Xin chào: ${element.name}, Id: ${element.id}`);
});