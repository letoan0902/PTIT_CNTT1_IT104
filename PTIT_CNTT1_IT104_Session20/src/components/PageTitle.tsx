import { useState,useEffect } from "react";
const PageTitle = () => {
    const [name,setName] = useState("");
    useEffect(() => {
        if(name){
            document.title = `Chào mừng ${name} đến với ứng dụng`;
        }else {
            document.title = `Ứng dụng react`;
        }
    },[name]);
    return(
        <div style={{textAlign:"center",marginTop:"50px"}}>
            <h2>Nhập tên của bạn để thay đổi tiêu đề: </h2>
            <input type="text"
            placeholder="Nhập tên"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{padding:"8px",width:"250px",fontSize:"16px"}} />
            <p>{name ? `Xin chào,${name}` : `Hãy nhập tên để thấy tiêu đề thay đổi`}</p>
        </div>
    )
}
export default PageTitle