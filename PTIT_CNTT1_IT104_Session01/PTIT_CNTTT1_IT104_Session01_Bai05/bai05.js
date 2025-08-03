
const extractData = (a)=>{
    console.log(`Title: ${a.title}`);
    console.log(`Author: ${a.author}`);
    console.log(`Author Name: ${a.author.name}`);
    console.log(`Author Email: ${a.author.email}`);
}


const response = {
                data: {
                    id: 1,
                    title: "Destructuring in JavaScript",
                    author: {
                        name: "Dev",
                        email: "Dev@gmail.com",
                    },
                },
            };
extractData(response.data);