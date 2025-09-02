import React, { useState } from 'react'
import "./UserProfile.css"

const UserProfile:React.FC = () =>{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[submitted,setSubmitted] = useState(false);
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        setSubmitted(true);
    };
    return(
        <div className='profile-container'>
            <h2>Thông tin người dùng</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Nhập tên'
                value={name}
                onChange={(e) => setName(e.target.value)} />
                <input type="email"
                placeholder='Nhập email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <button type='submit'>Gửi</button>
            </form>
            {submitted && (
                <div className='result-box'>
                    <p><strong>Tên:</strong>{name}</p>
                    <p><strong>Email:</strong>{email}</p>
                </div>
            )}
        </div>
    )
}
export default UserProfile;