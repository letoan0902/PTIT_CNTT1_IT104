class Account {
    id: string;
    userName: string;
    password:string;
    isLogin:boolean;
    role:string;

    constructor(id: string,
    userName: string,
    password:string,
    isLogin:boolean,
    role:string){
        this.userName=userName;
        this.id=id;
        this.password=password;
        this.isLogin=isLogin;
        this.role=role;
    }

    logIn(){
        this.isLogin=true;
    }
    
    logOut(){
        if(this.isLogin){
            this.isLogin=false;
            console.log("Đăng xuất thành công");
        }
    }
}

class userAcc extends Account{
    status:string;
    constructor(id: string,
    userName: string,
    password:string,
    isLogin:boolean,
    role:string,status:string){
        super(id,userName,password,isLogin,role);
        this.status=status;
    }

    logIn(): void {
        if(this.status=="active"){
            this.isLogin=true;
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

const user1=new userAcc("001","letoan1","1234567",false,"No","active");
user1.logIn();
user1.logOut();
const user2=new userAcc("001","letoan1","1234567",false,"No","banned");
user2.logIn();