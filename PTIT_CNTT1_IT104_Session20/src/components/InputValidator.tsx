import React, { useState } from 'react'
import "./InputValidator.css"
const InputValidator: React.FC = () => {
    const [value, setValue] = useState("");
    return(
        <div className='validator-container'>
            <h2>Kiểm tra độ dài chuỗi nhập vào</h2>
            <input type="" 
            placeholder='Nhập vào đây'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            />
            {value.length> 5 && (
                <p className='error'>CHuỗi nhập vào dài hơn 5 ký tự</p>
            )}
        </div>
    );
};
export default  InputValidator;